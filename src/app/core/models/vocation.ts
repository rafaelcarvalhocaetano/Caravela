export interface Vocation {
  id: number;
  vocation: string;
  is_basic: boolean;
  is_study: boolean;
  is_parental: boolean;
  date_visited: string;
  date_return: string;
  date_time_now: number;
  is_approved: boolean;
  is_pending: boolean;
  is_rejected: boolean;
}