export interface Utility {

  date?: string;
  numberMonth?: number;
  month?: string;
  year?: number;
  utility: number;
  utilityFormatted?: string; 
}

export interface UtilityYear {
  year: number;
  utilityFormatted: string;
}

export interface UtilityMonth {
  year: number;
  month: string;
  utilityFormatted: string;
}

export interface UtilityDay {
  year: number;
  month: string;
  date: string;
  utilityFormatted: string;
}

export interface UtilityData {
  forYear: UtilityYear[];
  forMonth: UtilityMonth[];
  forDay: UtilityDay[];
}

