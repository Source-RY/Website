export interface NavigationBarItem {
  id: number;
  label: string;
  visible: boolean;
  index: number;
  page: {
    url: string;
    enabled: boolean;
  };
}
