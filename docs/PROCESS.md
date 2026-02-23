# Dark Mode Feature Process – Velvet Comb Site

For this exercise, I implemented a dark mode toggle for the Velvet Comb website using browser-based AI (Claude Web) and the micro-iteration workflow. My goal was to allow users to switch between light and dark themes using CSS variables for background, text, and accent colors.  

I began by planning the feature with Claude, breaking it into small, testable steps: first defining CSS variables, then applying them to major sections (body, header, footer, buttons, text), next writing the `toggleTheme()` function in JavaScript, connecting the button, and finally testing in the browser. Each step was small enough to implement and verify within 5–10 minutes. Screenshots were taken after each iteration to document my workflow.  

Micro-iteration felt natural once I got the hang of it. Focusing on **one step at a time** helped me catch issues early, rather than having to debug everything at once. For example, when I connected the button to the `toggleTheme()` function, the AI’s self-review pointed out an ID mismatch and potential timing issues if the script ran before the DOM loaded. This was extremely helpful . I corrected the button ID and ensured the script tag was placed at the bottom of the HTML so the listener worked reliably.  

Claude Web was intuitive and responsive. I appreciated that it suggested edge cases and explained why certain code could fail. I noticed that self-review consistently caught **setup issues**, such as missing IDs or script placement problems, but it did not flag that the dark mode would not persist across pages, which I decided not to implement for this exercise.  

Overall, this workflow demonstrates how micro-iteration plus AI self-review leads to cleaner, more reliable code. By building the dark mode feature step by step, I was able to fully understand each part of the implementation, produce a working toggle, and create thorough documentation for the assignment.