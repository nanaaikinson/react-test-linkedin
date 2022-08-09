export interface IMessage {
  id: string;
  content: string;
  user: string;
  date: Date;
}

export interface IChatStore {
  user: string;
  setUser: (payload: string) => void;
  messages: Array<IMessage>;
  addMessage: (payload: string) => void;
}
