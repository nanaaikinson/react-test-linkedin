import create from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuid } from "uuid";
import { IChatStore } from "../types";

export const useChatStore = create(
  persist(
    (set) => ({
      messages: [],
      addMessage: (message: string, user: string) => {
        set((state: IChatStore) => ({
          messages: [
            ...state.messages,
            {
              id: uuid(),
              content: message,
              user: user,
              date: new Date(),
            },
          ],
        }));
      },
    } as IChatStore),
    { name: "chart-store" }
  )
);
