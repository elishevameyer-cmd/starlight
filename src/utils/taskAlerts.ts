import type { Task } from './taskParser';

export interface DeadlineStatus {
  isOverdue: boolean;
  daysUntil: number;
  urgency: 'urgent' | 'warning' | 'normal';
  message: string;
  color: string;
  icon: string;
}

export function calculateDeadlineStatus(deadline: string): DeadlineStatus {
  const deadlineDate = new Date(deadline);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  deadlineDate.setHours(0, 0, 0, 0);

  const daysUntil = Math.ceil(
    (deadlineDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );

  let urgency: 'urgent' | 'warning' | 'normal';
  let message: string;
  let color: string;
  let icon: string;

  if (daysUntil < 0) {
    urgency = 'urgent';
    message = `עברה ${Math.abs(daysUntil)} ימים!`;
    color = '#FF4444';
    icon = '🔴';
  } else if (daysUntil === 0) {
    urgency = 'urgent';
    message = 'היום!';
    color = '#FF4444';
    icon = '🔴';
  } else if (daysUntil === 1) {
    urgency = 'urgent';
    message = 'מחר!';
    color = '#FF6666';
    icon = '🔴';
  } else if (daysUntil <= 3) {
    urgency = 'warning';
    message = `בעוד ${daysUntil} ימים`;
    color = '#FFB700';
    icon = '🟡';
  } else {
    urgency = 'normal';
    message = `בעוד ${daysUntil} ימים`;
    color = '#4CAF50';
    icon = '✅';
  }

  return {
    isOverdue: daysUntil < 0,
    daysUntil: Math.abs(daysUntil),
    urgency,
    message,
    color,
    icon,
  };
}

export function getTaskAlerts(tasks: Task[]): {
  overdue: Task[];
  withinThreeDays: Task[];
  all: DeadlineStatus[];
} {
  const overdue: Task[] = [];
  const withinThreeDays: Task[] = [];
  const all: DeadlineStatus[] = [];

  for (const task of tasks) {
    if (task.status === 'done') continue;

    const status = calculateDeadlineStatus(task.deadline);
    all.push(status);

    if (status.isOverdue) {
      overdue.push(task);
    } else if (status.urgency === 'warning' || status.urgency === 'urgent') {
      withinThreeDays.push(task);
    }
  }

  return { overdue, withinThreeDays, all };
}

export function formatDeadline(deadline: string): string {
  const [year, month, day] = deadline.split('-');
  return `${day}/${month}`;
}

export function getTaskCountByStatus(tasks: Task[]): Record<string, number> {
  return {
    doing: tasks.filter(t => t.status === 'doing').length,
    'waiting-mom': tasks.filter(t => t.status === 'waiting-mom').length,
    'waiting-claude': tasks.filter(t => t.status === 'waiting-claude').length,
    backlog: tasks.filter(t => t.status === 'backlog').length,
    done: tasks.filter(t => t.status === 'done').length,
  };
}
