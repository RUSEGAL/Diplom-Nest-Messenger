/**
 * Defines the structure of a User object.
 */
export interface User {
  userId: string;
  userName: string;
}

/**
 * Defines the structure of a Message object.
 */
export interface Message {
  user: User;
  timeSent: string;
  message: string;
}

/**
 * Defines the structure of events sent from the server to the client.
 */
export interface ServerToClientEvents {
  /**
   * Sends a chat message from server to client.
   * 
   * @param message - The message to be sent.
   */
  chat: (message: Message) => void;
}

export interface ClientToServerEvents {
  /**
   * Sends a chat message from client to server.
   * 
   * @param message - The message to be sent.
   */
  chat: (message: Message) => void;
}