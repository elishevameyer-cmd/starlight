import type { Task } from './taskParser';

export type SortOrder =
  | 'deadline-asc'
  | 'deadline-desc'
  | 'priority-asc'
  | 'priority-desc'
  | 'created-new'
  | 'created-old';

export function sortTasks(tasks: Task[], sortBy: SortOrder = 'deadline-asc'): Task[] {
  const sorted = [...tasks];

  switch (sortBy) {
    case 'deadline-asc':
      return sorted.sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime());

    case 'deadline-desc':
      return sorted.sort((a, b) => new Date(b.deadline).getTime() - new Date(a.deadline).getTime());

    case 'priority-asc': {
      const priorityOrder = { high: 0, medium: 1, low: 2 };
      return sorted.sort((a, b) => {
        const diff = priorityOrder[a.priority] - priorityOrder[b.priority];
        if (diff !== 0) return diff;
        return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
      });
    }

    case 'priority-desc': {
      const priorityOrder = { high: 0, medium: 1, low: 2 };
      return sorted.sort((a, b) => {
        const diff = priorityOrder[b.priority] - priorityOrder[a.priority];
        if (diff !== 0) return diff;
        return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
      });
    }

    case 'created-new':
      return sorted.sort((a, b) => new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime());

    case 'created-old':
      return sorted.sort((a, b) => new Date(a.createdDate).getTime() - new Date(b.createdDate).getTime());

    default:
      return sorted;
  }
}

export function groupTasksByStatus(tasks: Task[]): Record<string, Task[]> {
  return {
    doing: tasks.filter(t => t.status === 'doing'),
    'waiting-mom': tasks.filter(t => t.status === 'waiting-mom'),
    'waiting-claude': tasks.filter(t => t.status === 'waiting-claude'),
    backlog: tasks.filter(t => t.status === 'backlog'),
    done: tasks.filter(t => t.status === 'done'),
  };
}

export const SORT_OPTIONS = [
  { value: 'deadline-asc', label: '⏰ מועד - קרוב לרחוק' },
  { value: 'deadline-desc', label: '⏰ מועד - רחוק לקרוב' },
  { value: 'priority-asc', label: '🎯 עדיפות - גבוהה לנמוכה' },
  { value: 'priority-desc', label: '🎯 עדיפות - נמוכה לגבוהה' },
  { value: 'created-new', label: '📅 חדש ביותר' },
  { value: 'created-old', label: '📅 ישן ביותר' },
];
