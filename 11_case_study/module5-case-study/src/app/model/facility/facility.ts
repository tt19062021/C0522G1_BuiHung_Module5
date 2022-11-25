
export interface Facility {
  id?: number;
  name: string;
  area: number;
  cost: number;
  maxPeople: number;
  desOtherConver: string;
  serviceFree: string;
  floors: number;
  poolArea: number;
  standardRoom: string;
  image: string;
  facilityType?: string;
  rentType?: string;
}
