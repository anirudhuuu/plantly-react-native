import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import * as FileSystem from "expo-file-system";

export type PlantType = {
  id: string;
  name: string;
  wateringFrequencyDays: number;
  lastWateredAtTimestamp?: number;
  imageUri?: string;
};

type PlantsState = {
  nextId: number;
  plants: PlantType[];
  addPlant: (
    name: string,
    wateringFrequencyDays: number,
    imageUri?: string,
  ) => Promise<void>;
  removePlant: (plantId: string) => void;
  waterPlant: (plantId: string) => void;
};

export const usePlantStore = create(
  persist<PlantsState>(
    (set) => ({
      plants: [],
      nextId: 1,
      addPlant: async (
        name: string,
        wateringFrequencyDays: number,
        imageUri?: string,
      ) => {
        const savedImageUri =
          FileSystem.documentDirectory +
          `${new Date().getTime()}-${imageUri?.split("/").slice(-1)[0]}`;

        if (imageUri) {
          try {
            await FileSystem.copyAsync({
              from: imageUri,
              to: savedImageUri,
            });
          } catch (error) {
            console.warn("Failed to copy image:", error);
            return;
          }
        }

        set((state) => {
          return {
            ...state,
            nextId: state.nextId + 1,
            plants: [
              {
                id: String(state.nextId),
                name,
                wateringFrequencyDays,
                imageUri: imageUri ? savedImageUri : undefined,
                lastWateredAtTimestamp: 0,
              },
              ...state.plants,
            ],
          };
        });
      },
      removePlant: (plantId: string) => {
        set((state) => {
          const plantToRemove = state.plants.find(
            (plant) => plant.id !== plantId,
          );

          if (plantToRemove?.imageUri) {
            FileSystem.deleteAsync(plantToRemove.imageUri, {
              idempotent: true,
            }).catch((err) => console.warn("Failed to remove image", err));
          }

          return {
            ...state,
            plants: state.plants.filter((plant) => plant.id !== plantId),
          };
        });
      },
      waterPlant: (plantId: string) => {
        return set((state) => {
          return {
            ...state,
            plants: state.plants.map((plant) => {
              if (plant.id === plantId) {
                return {
                  ...plant,
                  lastWateredAtTimestamp: Date.now(),
                };
              }
              return plant;
            }),
          };
        });
      },
    }),
    {
      name: "plantly-plants-store",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
