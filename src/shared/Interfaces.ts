enum CategoryEnum {
    Home = "Home",
    School = "School",
    Sport = "Sport",
    Other = "Other"
}

export interface ITodo {
  description: string
  category: CategoryEnum
  id: number
}