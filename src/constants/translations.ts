import { Translation, TranslationsTypes } from "../services/translations";

const en: TranslationsTypes = {
  completed: 'Completed',
  inProgress: 'In progress',
  kanban: 'Kanban',
  table: 'Table',
  todoTitle: 'Todos',
  signOut: 'Sing out',
  setting: 'Settings',
  yourProfile: 'Your profile',
  id: 'Id',
  title: 'Title',
  filterTitle: 'Filter title...',
  next: 'Next',
  previous: 'Previous' 
}

const translation = new Translation(en,'en')

export { en, translation }