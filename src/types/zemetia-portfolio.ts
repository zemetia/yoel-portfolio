

export type User = {
  id: string;
  email: string;
}

export type Profile = {
  name: string;
  bio: string;
  email?: string;
  phone?: string;
  address?: string;
  linkedin?: string;
  github?: string;
  website?: string;
  instagram?: string;
  birthDate?: string;
  /**
   * Profile photo stored as base64 data URI (e.g., "data:image/jpeg;base64,/9j/4AAQ...")
   * Compressed to max 250KB after encoding
   */
  photoUrl?: string;
  /**
   * Whether to show the profile photo on the CV (per-CV setting)
   * Defaults to true if undefined for backwards compatibility
   */
  showPhoto?: boolean;
  heroSubtitle?: string;
  heroSequences?: string[];
  visibleSections?: string[];
  activeTheme?: 'classic' | 'modern' | 'datasci';
}

export type Skill = {
  id:string;
  category: string;
  list: string;
  order?: number;
}

export type PersonalStory = {
  id: string;
  title: string;
  description: string;
}

export type Education = {
  id: string;
  degree: string;
  institution: string;
  startDate: string; // 'Mon YYYY'
  endDate: string; // 'Mon YYYY' or 'Present'
  isCurrent: boolean;
  description?: string;
  order?: number;
}

export type Project = {
  id: string;
  title: string;
  description: string;
  projectUrl?: string;
  repoUrl?: string;
  client?: string;
  year?: string;
  status: string;
  /**
   * Project images stored as base64 data URIs
   * Each image compressed to max 250KB after encoding
   * Total size for all images should not exceed 800KB
   */
  images: string[];
  tags: string[];
  collaborators?: string[];
  aiHint?: string;
  order?: number;
};

export type Experience = {
    id: string;
    title: string;
    company: string;
    employmentType: string;
    location: string;
    locationType: string;
    startDate: string;
    endDate:string;
    description: string;
    skills: string[];
    /**
     * Experience images stored as base64 data URIs
     * Each image compressed to max 250KB after encoding
     * Total size for all images should not exceed 800KB
     */
    images: string[];
    aiHint?: string;
    isPublic: boolean;
    order?: number;
};

export const publicationTypes = ['Journal', 'Conference', 'Book', 'Article', 'Other'] as const;
export type PublicationType = (typeof publicationTypes)[number];

export type Publication = {
  id: string;
  title: string;
  authors: string;
  publicationType: PublicationType;
  publisher: string; // e.g. Journal Name, Conference Name
  year: string;
  doi?: string;
  link?: string;
  order?: number;
}

export type License = {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  /**
   * License/certificate images stored as base64 data URIs
   * Each image compressed to max 250KB after encoding
   * Total size for all images should not exceed 800KB
   */
  images: string[];
  aiHint?: string;
  order?: number;
}

export type VolunteerExperience = {
    id: string;
    role: string;
    organization: string;
    startDate: string;
    endDate: string;
    isCurrent: boolean;
    description: string;
    location?: string;
    order?: number;
}

export type Organization = {
    id: string;
    name: string;
    role: string;
    startDate: string;
    endDate: string;
    description: string;
    location?: string;
    isCurrent: boolean;
    order?: number;
}

export type Contact = {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string; 
}

export type Visit = {
    id: string;
    timestamp: string;
    // In a real app, you might add user agent, location, etc.
}

export type PortfolioData = {
  profile: Profile;
  skills: Skill[];
  educations: Education[];
  projects: Project[];
  experiences: Experience[];
  publications: Publication[];
  licenses: License[];
  volunteerExperiences: VolunteerExperience[];
  personalStories: PersonalStory[];
  organizations: Organization[];
  sectionVisibility?: Record<string, boolean>;
  selectedItems?: Record<string, string[]>;
};

/**
 * Public CV Build data structure
 * Extends the portfolio data with CV-specific metadata
 */
export type PublicCvBuild = {
  profile: Profile;
  skills?: Skill[];
  educations?: Education[];
  experiences?: Experience[];
  projects?: Project[];
  publications?: Publication[];
  licenses?: License[];
  volunteerExperiences?: VolunteerExperience[];
  organizations?: Organization[];
  sectionVisibility?: Record<string, boolean>;
  selectedItems?: Record<string, string[]>;
  // CV-specific metadata
  templateId?: string; // Selected CV template ID
  password?: string; // Optional password protection
  createdAt: string; // ISO date string
  lastAccessed?: string; // ISO date string
  // AI Analysis results (embedded, not in separate collection)
  analysis?: {
    analysisDate: string; // ISO date string
    overallScore: number; // 0-100 overall score
    categoryScores: {
      completeness: number;
      quality: number;
      ats: number;
      content: number;
      general: number;
    };
    strengths: string[];
    weaknesses: string[];
    priorityAreas: string[];
    summary: string;
    checklist: ChecklistItem[];
    complexityLevel: 'simple' | 'moderate' | 'complex';
    suggestions: Suggestion[];
    scoringTime?: number;
    improvementsTime?: number;
  };
};

/**
 * API Key Pool Type for load distribution
 */
export type ApiKeyPool = 'scoring' | 'improvements' | 'general';

/**
 * Gemini API Key for multi-key rotation system
 */
export type GeminiApiKey = {
  id: string;
  name: string; // Friendly name for identification
  key: string; // The actual API key
  isActive: boolean; // Whether this key is currently enabled
  pool?: ApiKeyPool; // Pool assignment for load distribution (scoring, improvements, or general)
  usageCount: number; // Total number of times this key has been used
  dailyUsageCount: number; // Usage count for today (resets daily)
  lastResetDate: string; // ISO date string of last daily reset
  lastUsedAt?: string; // ISO date string of last usage
  lastErrorAt?: string; // ISO date string of last error
  errorCount: number; // Total error count (for auto-disabling)
  consecutiveErrors: number; // Consecutive errors (resets on success)
  createdAt: string; // ISO date string
  order?: number; // Display order
};

/**
 * API Usage Log for tracking statistics
 */
export type ApiUsageLog = {
  id: string;
  keyId: string; // Reference to GeminiApiKey.id
  keyName: string; // Snapshot of key name at time of use
  flowName: string; // Name of the AI flow that used the key
  success: boolean; // Whether the call succeeded
  errorMessage?: string; // Error message if failed
  timestamp: string; // ISO date string
  responseTime?: number; // Response time in milliseconds
};

/**
 * Message in a conversation
 */
export type Message = {
  role: 'user' | 'assistant';
  content: string;
  timestamp: string; // ISO date string
};

/**
 * Conversation for Ask My Self feature with chat history
 */
export type Conversation = {
  id: string;
  userId: string; // For future multi-user support
  messages: Message[];
  title: string; // Auto-generated from first question
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
};

/**
 * Filter parameters for querying Projects
 */
export type ProjectFilters = {
  tags?: string[]; // Filter by tags (any match)
  year?: string; // Filter by specific year
  keyword?: string; // Search in title/description
  client?: string; // Filter by client name
  status?: string; // Filter by status
};

/**
 * Filter parameters for querying Experiences
 */
export type ExperienceFilters = {
  company?: string; // Filter by company name
  skills?: string[]; // Filter by skills (any match)
  keyword?: string; // Search in title/description
  employmentType?: string; // Filter by employment type
  dateRange?: {
    start?: string; // Start date (Mon YYYY format)
    end?: string; // End date (Mon YYYY format)
  };
};

/**
 * Filter parameters for querying Skills
 */
export type SkillFilters = {
  category?: string; // Filter by category name
  keyword?: string; // Search in list
};

/**
 * Filter parameters for querying Education
 */
export type EducationFilters = {
  institution?: string; // Filter by institution name
  degree?: string; // Filter by degree
  keyword?: string; // Search in description
};

/**
 * Filter parameters for querying Publications
 */
export type PublicationFilters = {
  year?: string; // Filter by year
  type?: PublicationType; // Filter by publication type
  keyword?: string; // Search in title/authors
  publisher?: string; // Filter by publisher
};

/**
 * Filter parameters for querying Licenses
 */
export type LicenseFilters = {
  issuer?: string; // Filter by issuer
  keyword?: string; // Search in name
  year?: string; // Filter by year (extracted from date)
};

/**
 * Filter parameters for querying Volunteer Experiences
 */
export type VolunteerFilters = {
  organization?: string; // Filter by organization name
  keyword?: string; // Search in role/description
  isCurrent?: boolean; // Filter current roles
};

/**
 * Filter parameters for querying Organizations
 */
export type OrganizationFilters = {
  name?: string; // Filter by organization name
  keyword?: string; // Search in role/description
  isCurrent?: boolean; // Filter current memberships
};

/**
 * Filter parameters for querying Personal Stories
 */
export type PersonalStoryFilters = {
  keyword?: string; // Search in title/description
};

/**
 * Reasoning cycle for multi-cycle AI processing
 * Tracks each cycle's tool calls, retrieved data, and thinking process
 */
export type ReasoningCycle = {
  cycleNumber: number; // 1, 2, or 3
  stage: 'retrieval' | 'analysis' | 'synthesis'; // What this cycle is doing
  thinking: string; // AI's reasoning for this cycle
  toolsCalled: string[]; // Names of tools/functions called
  dataRetrieved: Record<string, number>; // Key: data type, Value: count of items retrieved
  status: 'in_progress' | 'completed' | 'failed'; // Cycle status
  error?: string; // Error message if cycle failed
  timestamp: string; // ISO date string
};

/**
 * Enhanced output for Answer My Self flow with multi-cycle reasoning
 */
export type AnswerMySelfOutputWithCycles = {
  answer: string; // Final polished answer in Markdown
  cycles: ReasoningCycle[]; // Array of reasoning cycles (max 3)
  totalCycles: number; // Number of cycles executed
  completionStatus: 'success' | 'partial' | 'failed'; // Overall completion status
};

/**
 * Individual checklist item for CV analysis
 * Updated to 5 core categories to avoid schema complexity
 */
export type ChecklistItem = {
  category: 'completeness' | 'quality' | 'ats' | 'content' | 'general';
  item: string; // Description of what's being checked
  passed: boolean; // Whether this item passes
  weight: number; // Weight for scoring (1-5)
  feedback?: string; // Optional detailed feedback
  section?: string; // Specific section this check applies to (e.g., "Work Experience", "Projects")
};

/**
 * Actionable suggestion for CV improvement
 */
export type Suggestion = {
  id: string;
  type: 'summary' | 'experience' | 'project' | 'skill' | 'general';
  targetId?: string; // ID of the specific item to update (experience.id, project.id, etc.)
  field: string; // Which field to update (e.g., 'description', 'title')
  currentText: string; // Current text
  suggestedText: string; // AI-suggested replacement text
  reason: string; // Why this change is recommended
  applied: boolean; // Whether user has applied this suggestion
  priority: 'high' | 'medium' | 'low'; // Suggestion priority
  requiresUserInput: boolean; // True if needs new info from user (to-do item), false if AI can fix it (apply button)
};

/**
 * Stage 1 AI output: High-level CV scoring and assessment
 * Updated to 5 core categories (scores calculated from checklist)
 */
export type CvScore = {
  overallScore: number; // 0-100
  categoryScores: {
    completeness: number; // 0-100 - All essential sections present
    quality: number; // 0-100 - Content quality and professionalism
    ats: number; // 0-100 - ATS compatibility
    content: number; // 0-100 - Summary, experience, projects, skills quality
    general: number; // 0-100 - Overall best practices
  };
  strengths: string[]; // Top 3-5 strengths
  weaknesses: string[]; // Top 3-5 weaknesses
  priorityAreas: string[]; // Areas that need improvement (guides Stage 2)
  summary: string; // Brief summary of overall assessment
  detailedFeedback: {
    completeness: string;
    quality: string;
    ats: string;
    content: string;
    general: string;
  };
  checklist: ChecklistItem[]; // 30 items: 6 per category
  complexityLevel: 'simple' | 'moderate' | 'complex'; // Based on failed items
};

/**
 * Stage 2 AI output: Detailed improvements and actionable suggestions
 */
export type CvImprovements = {
  quickFixes: Suggestion[]; // Auto-applicable fixes (requiresUserInput: false)
  todoItems: Suggestion[]; // Items requiring user input (requiresUserInput: true)
  checklist: ChecklistItem[]; // Detailed section-level checks
  complexityLevel: 'simple' | 'moderate' | 'complex'; // Based on number/type of issues
};

/**
 * Analysis stage for progress tracking
 */
export type AnalysisStage = 'idle' | 'scoring' | 'improvements' | 'complete' | 'error';

/**
 * Real-time progress tracking for CV analysis
 */
export type AnalysisProgress = {
  id: string; // Progress document ID
  cvId: string; // Reference to CV being analyzed
  stage: AnalysisStage;
  scoringProgress: number; // 0-100
  improvementsProgress: number; // 0-100
  currentThought: string; // What AI is currently doing
  startTime: string; // ISO date string
  lastUpdate: string; // ISO date string
  scoringComplete: boolean;
  improvementsComplete: boolean;
  scoringSummary?: string; // Summary after Stage 1
  keyPoolUsed?: {
    scoring?: string; // Key ID used for scoring
    improvements?: string; // Key ID used for improvements
  };
  error?: string; // Error message if failed
};

/**
 * Complete CV analysis result (combines both stages)
 */
export type CvAnalysis = {
  id: string;
  cvId: string; // Reference to publicCvBuilds document ID
  analysisDate: string; // ISO date string

  // Stage 1: Scoring & Assessment results
  overallScore: number; // 0-100 overall score
  categoryScores: {
    completeness: number; // 0-100 - All essential sections present
    quality: number; // 0-100 - Content quality and professionalism
    ats: number; // 0-100 - ATS compatibility
    content: number; // 0-100 - Summary, experience, projects, skills quality
    general: number; // 0-100 - Overall best practices
  };
  strengths: string[]; // List of CV strengths
  weaknesses: string[]; // List of CV weaknesses (renamed from improvements)
  priorityAreas: string[]; // Areas focused on in Stage 2
  summary: string; // Brief summary of analysis
  checklist: ChecklistItem[]; // Detailed diagnostic checklist (30 items: 6 per category)
  complexityLevel: 'simple' | 'moderate' | 'complex'; // Complexity of issues found

  // Stage 2: Improvements results
  suggestions: Suggestion[]; // Actionable improvement suggestions (quickFixes + todoItems)

  // Metadata
  scoringTime?: number; // Time taken for Stage 1 (ms)
  improvementsTime?: number; // Time taken for Stage 2 (ms)
  keyPoolUsed?: {
    scoring?: string;
    improvements?: string;
  };
};
