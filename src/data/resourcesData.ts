export interface StudyResource {
  id: string;
  title: string;
  category: 'Engineering' | 'Computer Science' | 'Programming' | 'Competitive Exams' | 'Academic Resources';
  description: string;
  downloadSize: string;
  format: 'PDF Notes' | 'Handwritten PDF' | 'Digital Doc' | 'Cheat Sheet';
  author: string;
  lastUpdated: string;
  syllabus: string[];
  introduction: string;
  detailedContent: string;
  faqs: { q: string; a: string }[];
  references: string[];
}

export const resourcesData: StudyResource[] = [
  {
    id: "data-structures-notes",
    title: "Data Structures & Algorithms (DSA) Lecture Notes",
    category: "Computer Science",
    description: "Comprehensive lecture notes covering Arrays, Linked Lists, Stacks, Queues, Trees, Graphs, Sorting, and Searching algorithms.",
    downloadSize: "4.8 MB",
    format: "PDF Notes",
    author: "Dr. Arjan Mehta, PhD",
    lastUpdated: "August 2026",
    syllabus: [
      "Introduction to Time & Space Complexity (Asymptotic Notation)",
      "Linear Data Structures: Array representations, Singly/Doubly Linked Lists",
      "Stacks and Queues: Array & Linked List implementations, Applications (Infix to Postfix)",
      "Non-Linear Data Structures: Binary Trees, BST traversal, AVL Trees, Heap structures",
      "Graphs: BFS, DFS, Dijkstra's algorithm, Prim's and Kruskal's MST algorithms",
      "Sorting & Searching: QuickSort, MergeSort, HeapSort, Binary Search"
    ],
    introduction: "Data Structures and Algorithms (DSA) form the foundational backbone of computer science and software engineering. These lecture notes provide a rigorous mathematical and structural look into organizing, managing, and storing data in computer systems to perform operations efficiently.",
    detailedContent: `### Understanding Computational Complexity
Computational performance is analyzed using asymptotic notations (Big O, Omega, Theta). Big O notation describes the upper bound of execution time in the worst-case scenario. For instance, searching an element in an unsorted array of size N requires traversing each index sequentially, yielding a time complexity of O(N). Conversely, searching a sorted array using Binary Search repeatedly splits the search interval in half, yielding O(log N).

### Linear vs Non-Linear Structures
1. **Arrays**: Fixed size contiguous memory layout. Access time is O(1) via index arithmetic, but insertions and deletions at arbitrary positions require shifting elements, yielding O(N).
2. **Linked Lists**: Dynamic structures where nodes contain data and pointers. Insertion/deletion at known nodes is O(1), but searching requires sequential traversal O(N).
3. **Binary Search Trees (BST)**: Hierarchical node structures where left children contain smaller values and right children contain larger values. In balanced states, search, insertion, and deletion operate at O(log N). If unbalanced, operations degrade to O(N).`,
    faqs: [
      { q: "What is the difference between a Stack and a Queue?", a: "A Stack follows the Last-In-First-Out (LIFO) principle (e.g. undo operations), whereas a Queue operates on First-In-First-Out (FIFO) (e.g. printer spooling)." },
      { q: "Why is AVL Tree preferred over standard BST?", a: "AVL Trees are self-balancing BSTs. They guarantee O(log N) search times by performing rotations when height differences exceed 1, preventing trees from degrading into linked lists." }
    ],
    references: [
      "Introduction to Algorithms by Thomas H. Cormen",
      "Data Structures and Algorithms in Java by Robert Lafore"
    ]
  },
  {
    id: "operating-system-notes",
    title: "Operating Systems (OS) Comprehensive Exam Notes",
    category: "Computer Science",
    description: "Detailed study notes on Process Management, Threading, CPU Scheduling, Memory Management (Paging, Segmentation), Virtual Memory, and Disk Scheduling.",
    downloadSize: "3.2 MB",
    format: "PDF Notes",
    author: "Dr. Arjan Mehta, PhD",
    lastUpdated: "August 2026",
    syllabus: [
      "OS Structures & Services",
      "Process Management: Process State transitions, PCB, Context Switching",
      "CPU Scheduling: FCFS, SJF, SRTF, Round Robin, Multi-level Queue",
      "Process Synchronization: Critical Section problem, Semaphores, Mutex, Classical IPC Problems",
      "Deadlocks: Characterization, Prevention, Avoidance (Banker's Algorithm), Detection",
      "Memory Management: Paging, Segmentation, Page Replacement Algorithms (FIFO, LRU, Optimal)"
    ],
    introduction: "An operating system acts as an intermediary interface between computer hardware and the application programs. This guide contains core concepts required for engineering semesters and competitive entrance exams like GATE.",
    detailedContent: `### Process Management & CPU Scheduling
A process represents a program in execution. The CPU scheduler determines which ready process is allocated the CPU. Scheduling algorithms are classified into:
- **Preemptive**: Interrupts active processes (e.g. Round Robin, SRTF).
- **Non-Preemptive**: Allows processes to finish cycles (e.g. FCFS, SJF).

### Classical Synchronization Problems
Concurrency challenges arise when processes access shared data. Semaphores (integer variables accessed via wait() and signal() atomic operations) manage thread synchronization. Classical problems include the Producer-Consumer problem, Reader-Writer problem, and the Dining Philosophers scenario.

### Virtual Memory and Paging
Paging divides logical memory into blocks (pages) and physical memory into frames of identical size. Page tables translate page numbers to physical frames. When a requested page is not in physical RAM, a page fault occurs, prompting the OS to retrieve it from secondary storage via swap files.`,
    faqs: [
      { q: "What is a Deadlock and what are the four conditions?", a: "Deadlock is a state where processes are blocked waiting for resources held by each other. The four conditions are: Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait." },
      { q: "Explain the difference between Paging and Segmentation.", a: "Paging divides memory into fixed-size blocks (non-contiguous mapping), whereas Segmentation divides logical space into variable-sized user-defined blocks (segments like main, stack, functions)." }
    ],
    references: [
      "Operating System Concepts by Silberschatz, Galvin, and Gagne",
      "Modern Operating Systems by Andrew S. Tanenbaum"
    ]
  },
  {
    id: "gate-engineering-math-formulas",
    title: "GATE Engineering Mathematics Formula Sheet",
    category: "Competitive Exams",
    description: "Handy PDF cheat sheet containing formulas for Linear Algebra, Calculus, Differential Equations, Probability, and Numerical Methods.",
    downloadSize: "1.5 MB",
    format: "Cheat Sheet",
    author: "Dr. Arjan Mehta, PhD",
    lastUpdated: "August 2026",
    syllabus: [
      "Linear Algebra: Matrix operations, Eigenvalues, Eigenvectors, Cayley-Hamilton Theorem",
      "Calculus: Limits, Continuity, Differentiability, Mean Value Theorems, Multiple Integrals",
      "Differential Equations: First order linear/non-linear equations, Higher order linear equations",
      "Probability & Statistics: Baye's Theorem, Random Variables, Binomial, Poisson, Normal distributions"
    ],
    introduction: "This cheat sheet gathers all high-yield mathematical formulas required to score maximum marks in the engineering math section of GATE (all branches).",
    detailedContent: `### Matrix Properties & Eigenvalues
The characteristic equation of matrix A is given by: |A - λI| = 0. According to the Cayley-Hamilton Theorem, every square matrix satisfies its own characteristic equation. This is highly useful for calculating inverse matrices and higher matrix powers rapidly.

### Calculus and Series Convergence
Mean Value Theorems (Rolle's, Lagrange's, Cauchy's) describe function slopes. The Taylor series expansions around x = a allow approximating complex functions:
f(x) = f(a) + f'(a)(x-a) + f''(a)(x-a)²/2! + ...`,
    faqs: [
      { q: "How are Eigenvalues used in structural analysis?", a: "Eigenvalues define the natural frequencies of structures, helping engineers identify vibration limits and prevent resonance under wind/seismic forces." },
      { q: "What is Bayes' Theorem?", a: "Bayes' Theorem calculates conditional probability: P(A|B) = [P(B|A) * P(A)] / P(B), allowing predictions based on prior known parameters." }
    ],
    references: [
      "Advanced Engineering Mathematics by Erwin Kreyszig",
      "Higher Engineering Mathematics by B.S. Grewal"
    ]
  }
];
