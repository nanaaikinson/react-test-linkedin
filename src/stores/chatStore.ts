import create from "zustand";
// import { persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";
import { IChatStore } from "../types";

export const useChatStore = create<IChatStore>((set) => ({
  messages: [],
  addMessage: (message: string, user: string) => {
    set((state: IChatStore) => ({
      messages: [
        ...state.messages,
        {
          id: uuidv4(),
          content: message,
          user: user,
          date: new Date(),
        },
      ],
    }));
  },
}));

// progressive enhancement check.
