export interface IMessage {
  id: string;
  content: string;
  user: string;
  date: Date;
}

export interface IChatStore {
  messages: Array<IMessage>;
  addMessage: (message: string, user: string) => void;
}

export interface IBroacastMessage {
  tabId: string;
  message: string;
  user: string;
}
