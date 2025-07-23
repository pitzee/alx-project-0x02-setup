export interface CardProps {
  title: string;
  content: string;
}

export interface ButtonProps {
  size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md" | "rounded-lg";
}

export interface PostProps {
  userId: number;
  title: string;
  content: string;
}
