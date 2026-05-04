# AI React Development Playbook (skills.md)


1. Pre-Development Checklist  

Before writing any code:

- Restate the goal in one line  
- Clearly list assumptions  
- Identify any missing information  
- Define the component structure  
- Only proceed once everything is clear  
- Always provide complete implementations

Avoid placeholder code like TODOs.  

---

2. Architecture (Feature-Based)  

Project structure:

src/  
  app/  
  features/  
  components/  
  hooks/  
  services/  
  utils/  
  types/  
  styles/  

Guidelines:
- Avoid cross-feature imports  
- Feature Isolation 
- Shared logic should be reusable  

---

3. Tech Stack  

- React 18+  
- TypeScript (strict mode)  
- TailwindCSS (for styling)  
- React Query (for server state)  
- Zustand (for global state)  
- Axios (for API calls)  
- React Hook Form with Zod (for forms)  

---

4. Component Design  

Types of components:
- UI Components: reusable and logic-free  
- Feature Components: contain both logic and UI  
- Page Components: responsible for composition only  

Guidelines:
- Keep components under ~200 lines  
- Extract logic longer than 30 lines into custom hooks  
- Don't do prop drilling(use context or better patterns) 

---

5. Styling Rules  

- Use Tailwind for styling 
- Keep spacing consistent across components
- Try to Reuse existing UI components   
- Avoid inline styles  

---

6. Default Theme System (Required)  

Stick to the predefined design system.

Color palette:

:root {
  --color-primary: #2563eb;
  --color-primary-hover: #1d4ed8;
  --color-bg: #f9fafb;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --color-success: #16a34a;
  --color-error: #dc2626;
  --color-warning: #f59e0b;
}

Rules:
- Use Tailwind equivalents (e.g., bg-blue-600)  
- Avoid introducing random colors  
- UI should be Consistent

---

7. API Layer  

- Single API client across the App -> You should use single API client for your app
- Avoid directly calling the API within components
- Used Typed Responses(Typescript First)
- Handle errors in one place  

---

8. State Management  

- useState for local/simple state 
- useReducer for complex/structured state  
- For server state and caching, React Query
- Zustand for global shared state  

---

9. Custom Hooks  

- Encapsulate logic using hooks  
- There shouldn't be UI in the hooks
- Always follow a naming Convention while devloping Hooks(ex:-useSomething)

---

10. Performance Optimization  

- Use React.memo for expensive/heavy components  
- Use Lazy Loading for implementing routing
- Debounce user inputs where applicable(searching,typing etc)  
- Prevent unnecessary re-renders which slows down the performance

---

11. Testing Strategy  

- Test what user sees and does
- Cover both hooks and components  
- Cover edge cases and failure scenarios  

---

12. Common Pitfalls  

- Making API calls inside components  
- Using the any type  (avoid unless strictly necessary)
- Large and messy components 
- Misusing the useEffect hook  

---

13. Development Workflow  

- Set up the project  
- Define the folder structure  
- Set up routing  
- Build base components  
- Develop features  
- Integrate APIs  
- Implement state management  
- Optimize performance  
- Write tests  

---

14. Code Quality  

- Use ESLint and Prettier for consistent code styles 
- Use clear naming conventions  
- Keep the functions small and focused  

---

15. Decision Rules  

- Keep it simple(Avoid over-engineering)  
- Prioritize readability over clever solutions  
- Focus on scalability instead of shortcuts  

---

16. Output Expectations  

- Provide complete code(No half-code) 
- Use proper types(Typescript preferred)  
- Maintain a clean and consistent structure  
- Avoid placeholders  

---

17. AI Behavior Rules  

- Don't assume without clarity  
- Avoid duplicating logic or creating renundancy 
- Follow the defined architecture strictly  

---

18. Definition of Completion  

- There should be No Errors 
- In the End it should be a Clean and maintainable architecture  
- Reusable components  

---

19. Final Note  

This document will act as  a single source of truth for AI-driven development.
