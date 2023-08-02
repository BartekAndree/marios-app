export interface Marios {
  mariosId: string;
  senderId: string;
  receiverId: string;
  type: string;
  title: string;
  comment: string;
  timestamp: Date;
}

export interface PayloadMarios {
  senderId: string;
  receiverId: string;
  type: string;
  title: string;
  comment: string;
}
