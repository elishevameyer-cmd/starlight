export interface Task {
  id: number;
  title: string;
  priority: 'high' | 'medium' | 'low';
  status: 'doing' | 'done' | 'waiting-mom' | 'waiting-claude' | 'backlog';
  createdDate: string;
  deadline: string;
  hoursEstimate?: number;
  notes?: string;
}

interface TaskSection {
  doing: Task[];
  done: Task[];
  'waiting-mom': Task[];
  'waiting-claude': Task[];
  backlog: Task[];
}

export function parseTasksMarkdown(content: string): TaskSection {
  const sections: TaskSection = {
    doing: [],
    done: [],
    'waiting-mom': [],
    'waiting-claude': [],
    backlog: [],
  };

  const lines = content.split('\n');

  let currentSection = '';
  let headerRow = false;
  let taskId = 1;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // סימון סקשנים
    if (line.includes('### 🚀 בתהליך')) {
      currentSection = 'doing';
      headerRow = false;
      continue;
    } else if (line.includes('### ⏳ ממתין לאמא')) {
      currentSection = 'waiting-mom';
      headerRow = false;
      continue;
    } else if (line.includes('### 🤖 ממתין לקלוד')) {
      currentSection = 'waiting-claude';
      headerRow = false;
      continue;
    } else if (line.includes('### ✅ בוצע')) {
      currentSection = 'done';
      headerRow = false;
      continue;
    } else if (line.includes('### 📦 בקיוביל')) {
      currentSection = 'backlog';
      headerRow = false;
      continue;
    }

    // זיהוי טבלה
    if (currentSection && line.trim().startsWith('|')) {
      if (line.includes('---')) {
        headerRow = true;
        continue;
      }

      if (headerRow && !line.includes('---')) {
        const cells = line.split('|').slice(1, -1).map(c => c.trim());

        if (cells.length >= 2) {
          const id = parseInt(cells[0]) || taskId++;
          const title = cells[1];
          const priorityStr = cells[2] || '🟡';
          const createdDate = cells[3] || new Date().toISOString().split('T')[0];
          const deadline = cells[4] || '2099-12-31';
          const notes = cells[cells.length - 1] || '';

          let priority: 'high' | 'medium' | 'low' = 'medium';
          if (priorityStr.includes('🔴')) priority = 'high';
          else if (priorityStr.includes('🟢')) priority = 'low';
          else priority = 'medium';

          const task: Task = {
            id,
            title,
            priority,
            status: currentSection as 'doing' | 'done' | 'waiting-mom' | 'waiting-claude' | 'backlog',
            createdDate,
            deadline,
            notes: notes !== title ? notes : '',
          };

          sections[currentSection as keyof TaskSection].push(task);
        }
      }
    }
  }

  return sections;
}

export function getAllTasks(sections: TaskSection): Task[] {
  return [
    ...sections.doing,
    ...sections['waiting-mom'],
    ...sections['waiting-claude'],
    ...sections.backlog,
    ...sections.done,
  ];
}
