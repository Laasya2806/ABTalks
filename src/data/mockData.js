export const MOCK_STUDENT_DATA = {
  name: "Arjun Mehta",
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80",
  track: "Web Development",
  currentDay: 12,
  totalDays: 60,
  consistencyStreak: 18,
  stretchCount: 4,
  consecutiveCoreDays: 5,
  standingPercentile: "Top 12%",
  isDay12Completed: false,
  completedMode: null, // 'core' | 'stretch' | null
  
  // Past 7 days activity
  activityStrip: [
    { day: 6, mode: 'core', status: 'completed', label: 'Day 6' },
    { day: 7, mode: 'core', status: 'completed', label: 'Day 7' },
    { day: 8, mode: 'stretch', status: 'completed', label: 'Day 8' },
    { day: 9, mode: 'core', status: 'completed', label: 'Day 9' },
    { day: 10, mode: 'core', status: 'completed', label: 'Day 10' },
    { day: 11, mode: 'core', status: 'completed', label: 'Day 11' },
    { day: 12, mode: null, status: 'pending', label: 'Today' }
  ]
};



export const MOCK_TRACKS = [
  {
    id: "web-dev",
    queryParam: "web",
    name: "Web Development",
    icon: "Code",
    positioning: "Build for the web.",
    progression: "HTML → CSS → JavaScript → React → APIs → Full-stack",
    description: "Master modern frontend engineering, interactive component design, and production React performance.",
    outcome: "60-day outcome: a growing portfolio of real projects and consistent GitHub activity.",
    activeCount: "1.4k students"
  },
  {
    id: "dsa",
    queryParam: "dsa",
    name: "DSA & Problem Solving",
    icon: "Cpu",
    positioning: "Think. Solve. Improve.",
    progression: "Arrays → Strings → Recursion → Trees → Graphs → Algorithms",
    description: "Build algorithm intuition step-by-step with real daily problem sets and optimal time-space complexity.",
    outcome: "60-day outcome: a visible record of your problem-solving journey.",
    activeCount: "980 students"
  },
  {
    id: "ai-ml",
    queryParam: "aiml",
    name: "AI & Machine Learning",
    icon: "Sparkles",
    positioning: "Go from models to systems.",
    progression: "Python → ML → Deep Learning → LLMs → Deployment",
    description: "From foundational Python modeling to fine-tuning LLMs and deploying production machine learning APIs.",
    outcome: "60-day outcome: projects that demonstrate what you can actually build.",
    activeCount: "750 students"
  }
];

export const MOCK_TRACK_CHALLENGES = {
  web: {
    id: 12,
    trackId: "web",
    track: "Web Development",
    title: "Build a Responsive Profile Card",
    difficulty: "Intermediate",
    estimatedTime: "~25 min",
    description: "Design and implement an accessible, responsive user profile card that adapts seamlessly across mobile viewports (390px) and desktop layout grids.",
    coreContent: {
      title: "Build a Responsive Profile Card",
      description: "Build the required responsive profile card meeting all baseline specifications: responsive layout, avatar status container, and accessible ARIA navigation.",
      estimatedTime: "~25 min",
      checklist: [
        "Responsive single-column card layout targeted at 390px mobile viewport",
        "Avatar image container with status indicator badge",
        "Primary action buttons (Follow / Connect) with hover state micro-animations",
        "Accessible HTML structure with proper ARIA roles and keyboard focus styling"
      ]
    },
    stretchContent: {
      title: "Build a Responsive Profile Card — Advanced",
      description: "Extend the responsive profile card with advanced engineering features: persistent dark/light theme toggle, 3D interactive card flip for engagement analytics, and custom keyframe micro-animations.",
      estimatedTime: "~40 min",
      checklist: [
        "All Core profile card baseline requirements",
        "Dark / light color scheme toggle with persistent state",
        "3D CSS card flip animation revealing detailed engagement analytics",
        "Smooth micro-interactions and custom CSS keyframe transitions"
      ]
    },
    checklist: [
      "Responsive single-column card layout targeted at 390px mobile viewport",
      "Avatar image container with status indicator badge",
      "Primary action buttons (Follow / Connect) with hover state micro-animations",
      "Accessible HTML structure with proper ARIA roles and keyboard focus styling"
    ],
    coreOption: {
      id: "core",
      title: "Core Challenge",
      subtitle: "Standard challenge for Day 12",
      description: "Implement the responsive profile card meeting all baseline requirements.",
      timeEstimate: "25 min",
      points: "+1 Consistency 🔥"
    },
    stretchOption: {
      id: "stretch",
      title: "Stretch Challenge",
      subtitle: "Push your skills further",
      description: "Add a theme toggle, interactive card flip for detailed stats, and custom micro-animations.",
      timeEstimate: "+15 min extra",
      points: "+1 Consistency 🔥 + 1 Growth Star ↗"
    }
  },
  dsa: {
    id: 12,
    trackId: "dsa",
    track: "DSA & Problem Solving",
    title: "Implement Two-Pointer Sliding Window",
    difficulty: "Hard",
    estimatedTime: "~35 min",
    description: "Solve the Longest Substring Without Repeating Characters problem using an optimal two-pointer sliding window algorithm with O(N) time complexity.",
    coreContent: {
      title: "Implement Two-Pointer Sliding Window",
      description: "Implement the baseline O(N) sliding window algorithm passing all standard test suites and space complexity analysis.",
      estimatedTime: "~35 min",
      checklist: [
        "Dynamic hash set or array map tracking character indices inside active window",
        "Left and right pointer progression maintaining invariant state",
        "Edge case handling for empty strings, single character, and repeating patterns",
        "Space complexity analysis document comparing hash map vs fixed frequency array"
      ]
    },
    stretchContent: {
      title: "Implement Two-Pointer Sliding Window — Advanced",
      description: "Extend the sliding window solution to strict O(1) auxiliary space complexity using ASCII frequency bit manipulation and performance stress testing.",
      estimatedTime: "~50 min",
      checklist: [
        "All Core sliding window baseline requirements",
        "Auxiliary space complexity optimization to strict O(1) space",
        "Custom bitmask or ASCII frequency array for O(1) character lookup",
        "Stress testing script validating against 1,000,000 character string streams"
      ]
    },
    checklist: [
      "Dynamic hash set or array map tracking character indices inside active window",
      "Left and right pointer progression maintaining invariant state",
      "Edge case handling for empty strings, single character, and repeating patterns",
      "Space complexity analysis document comparing hash map vs fixed frequency array"
    ],
    coreOption: {
      id: "core",
      title: "Core Challenge",
      subtitle: "Standard challenge for Day 12",
      description: "Implement O(N) sliding window solution passing all 25 test suites.",
      timeEstimate: "35 min",
      points: "+1 Consistency 🔥"
    },
    stretchOption: {
      id: "stretch",
      title: "Stretch Challenge",
      subtitle: "Push your skills further",
      description: "Optimize auxiliary space complexity to O(1) using bit manipulation or ASCII array.",
      timeEstimate: "+15 min extra",
      points: "+1 Consistency 🔥 + 1 Growth Star ↗"
    }
  },
  aiml: {
    id: 12,
    trackId: "aiml",
    track: "AI & Machine Learning",
    title: "Fine-tune Sentiment Classifier with LoRA",
    difficulty: "Advanced",
    estimatedTime: "~40 min",
    description: "Prepare a custom classification dataset, configure PyTorch PEFT parameters, and fine-tune a lightweight LLM adapter for real-time sentiment analysis.",
    coreContent: {
      title: "Fine-tune Sentiment Classifier with LoRA",
      description: "Configure PyTorch PEFT parameters and fine-tune a lightweight LoRA LLM adapter reaching >88% validation accuracy.",
      estimatedTime: "~40 min",
      checklist: [
        "Dataset preprocessing pipeline with tokenization and dynamic padding",
        "LoRA rank (r=8, alpha=16) parameter configuration on target linear layers",
        "Training loop validation measuring evaluation loss and macro F1 score",
        "Model weights export and inference benchmarking script on CPU/GPU"
      ]
    },
    stretchContent: {
      title: "Fine-tune Sentiment Classifier with LoRA — Advanced",
      description: "Extend the LoRA sentiment classifier with 4-bit QLoRA quantization, GGUF model export, and multi-batch latency benchmarking.",
      estimatedTime: "~60 min",
      checklist: [
        "All Core LoRA fine-tuning baseline requirements",
        "4-bit BitsAndBytes QLoRA quantization configuration",
        "GGUF model format export for edge deployment",
        "Latency vs accuracy benchmark matrix across batch sizes 1 to 32"
      ]
    },
    checklist: [
      "Dataset preprocessing pipeline with tokenization and dynamic padding",
      "LoRA rank (r=8, alpha=16) parameter configuration on target linear layers",
      "Training loop validation measuring evaluation loss and macro F1 score",
      "Model weights export and inference benchmarking script on CPU/GPU"
    ],
    coreOption: {
      id: "core",
      title: "Core Challenge",
      subtitle: "Standard challenge for Day 12",
      description: "Train and evaluate the LoRA adapter reaching >88% validation accuracy.",
      timeEstimate: "40 min",
      points: "+1 Consistency 🔥"
    },
    stretchOption: {
      id: "stretch",
      title: "Stretch Challenge",
      subtitle: "Push your skills further",
      description: "Quantize model to 4-bit (QLoRA) and deploy standard GGUF endpoint.",
      timeEstimate: "+20 min extra",
      points: "+1 Consistency 🔥 + 1 Growth Star ↗"
    }
  }
};

export const MOCK_TRACK_STUDENT_DATA = {
  web: {
    ...MOCK_STUDENT_DATA,
    trackId: "web",
    track: "Web Development",
    consistencyStreak: 18,
    stretchCount: 4,
    consecutiveCoreDays: 5,
    standingPercentile: "Top 12%"
  },
  dsa: {
    ...MOCK_STUDENT_DATA,
    trackId: "dsa",
    track: "DSA & Problem Solving",
    consistencyStreak: 14,
    stretchCount: 3,
    consecutiveCoreDays: 4,
    standingPercentile: "Top 15%",
    isDay12Completed: false,
    completedMode: null,
    activityStrip: [
      { day: 6, mode: 'core', status: 'completed', label: 'Day 6' },
      { day: 7, mode: 'core', status: 'completed', label: 'Day 7' },
      { day: 8, mode: 'stretch', status: 'completed', label: 'Day 8' },
      { day: 9, mode: 'core', status: 'completed', label: 'Day 9' },
      { day: 10, mode: 'core', status: 'completed', label: 'Day 10' },
      { day: 11, mode: 'core', status: 'completed', label: 'Day 11' },
      { day: 12, mode: null, status: 'pending', label: 'Today' }
    ]
  },
  aiml: {
    ...MOCK_STUDENT_DATA,
    trackId: "aiml",
    track: "AI & Machine Learning",
    consistencyStreak: 10,
    stretchCount: 2,
    consecutiveCoreDays: 3,
    standingPercentile: "Top 20%",
    isDay12Completed: false,
    completedMode: null,
    activityStrip: [
      { day: 6, mode: 'core', status: 'completed', label: 'Day 6' },
      { day: 7, mode: 'core', status: 'completed', label: 'Day 7' },
      { day: 8, mode: 'stretch', status: 'completed', label: 'Day 8' },
      { day: 9, mode: 'core', status: 'completed', label: 'Day 9' },
      { day: 10, mode: 'core', status: 'completed', label: 'Day 10' },
      { day: 11, mode: 'core', status: 'completed', label: 'Day 11' },
      { day: 12, mode: null, status: 'pending', label: 'Today' }
    ]
  }
};

export const normalizeTrackKey = (trackParam) => {
  if (!trackParam) return 'web';
  const key = trackParam.toLowerCase();
  if (key === 'dsa') return 'dsa';
  if (key === 'aiml' || key === 'ai-ml') return 'aiml';
  return 'web';
};

export const getTrackChallenge = (trackParam) => {
  const key = normalizeTrackKey(trackParam);
  return MOCK_TRACK_CHALLENGES[key] || MOCK_TRACK_CHALLENGES.web;
};
