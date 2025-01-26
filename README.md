🎥 Movie & TV Show Search Application
=====================================

This project is a **Movie & TV Show Search Application** built with **Next.js**, **Tailwind CSS**, **React Query**, and other modern tools. Users can search for movies and TV shows, filter and sort results, view details, and manage their favorites list.

🚀 Features
-----------

### **Core Functionality**

*   **Search**: Search movies and TV shows by title with autocomplete.
    
*   **Filter**: Filter results by genre, language, release date, etc.
    
*   **Sort**: Sort results by popularity, release date, rating, or title.
    
*   **Favorites List**: Add or remove items from a favorites list stored in local storage.
    
*   **Details Page**: View complete details for movies or TV shows, including a summary, cast, and genre.
    

### **User Experience**

*   **Responsive Design**: Works seamlessly across desktop, tablet, and mobile.
    
*   **Skeleton Placeholders**: Shows loading skeletons while fetching data.
    
*   **Dark Mode**: Not included in this project.
    

### **API Integration**

*   Fetches data from the [TMDb API](https://www.themoviedb.org/documentation/api).
    
*   Handles API requests with **Axios** and **React Query**.
    

🛠️ Tech Stack
--------------

*   **Framework**: [Next.js](https://nextjs.org/)
    
*   **Programming Language**: TypeScript
    
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
    
*   **State Management**: [React Query](https://tanstack.com/query/latest)
    
*   **API Handling**: Axios
    
*   **Slider Component**: [React Slick](https://react-slick.neostack.com/)
    

🏗️ Installation and Setup
--------------------------

### Prerequisites

*   Node.js (v16 or higher)
    
*   npm or yarn
    

### Steps to Run Locally

  bash 
    git clone https://github.com/hosseinAmini2028/movie-app.git cd movie-app
    
2.  bash

   npm install
    
3.  **Set Up API Keys:**
    
    *   Create a .env.local file in the root directory.
        
    *   envCopyNEXT\_PUBLIC\_TMDB\_API\_KEY=your\_api\_key\_here
        
4.  bashCopynpm run dev
    
5.  arduinoCopyhttp://localhost:3000
    

🌐 Demo
-------

A live demo of this project is available here:[https://ham-movie-app.vercel.app/](#)

🧪 Testing
----------

**Note:** This project does not include tests. If required, you can add tests using **Jest** or **React Testing Library**.

🚢 Deployment
-------------

This application is deployed on **Vercel**. To deploy it yourself:

1.  Push the project to a GitHub repository.
    
2.  Log in to [Vercel](https://vercel.com/) and create a new project.
    
3.  Connect the GitHub repository.
    
4.  Add the TMDb API key in Vercel’s environment settings.
    
5.  Deploy the project.
    

Alternatively, you can deploy using the following command:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   bashCopyvercel --prod   `

📚 Future Improvements
----------------------

*   **Dark Mode**: Add a dark theme for better usability.
    
*   **Infinite Scrolling**: Implement infinite scrolling for search results.
    
*   **Multi-Language Support**: Add localization for multiple languages.
    
*   **Unit Testing**: Add unit tests for key components and functionality.
    

🤝 Acknowledgments
------------------

*   **TMDb** for providing the API and data.
    
*   Responsive design built with **Tailwind CSS**.
    
*   Deployed seamlessly using **Vercel**.