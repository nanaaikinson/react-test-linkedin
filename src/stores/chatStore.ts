import create, { StateCreator } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";
import { IChatStore } from "../types";

type Persist = (
  config: StateCreator<IChatStore>,
  options: PersistOptions<IChatStore>
) => StateCreator<IChatStore>;

export const useChatStore = create<IChatStore>(
  (persist as Persist)(
    (set) => {
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
    },
    {
      name: "chatStore",
    }
  )
);
