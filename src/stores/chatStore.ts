import create from "zustand";
import { v4 as uuidv4 } from "uuid";
import { IChatStore } from "../types";

export const useChatStore = create<IChatStore>((set) => {
  return {
    user: "",
    messages: [],
    setUser: (payload: string) => {
      set(() => ({ user: payload }));
    },
    addMessage: (payload: string) => {
      set((state) => ({
        messages: [
          ...state.messages,
          {
            id: uuidv4(),
            content: payload,
            user: state.user,
            date: new Date(),
          },
        ],
      }));
    },
  };
});
