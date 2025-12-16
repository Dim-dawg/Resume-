import { jsPDF } from "jspdf";

export const generateResumePDF = () => {
  const doc = new jsPDF();
  const leftMargin = 20;
  const rightMargin = 20;
  const pageWidth = doc.internal.pageSize.width;
  const contentWidth = pageWidth - leftMargin - rightMargin;
  let y = 20;

  // --- Helper Functions ---

  const addWrappedText = (text: string, fontSize: number, fontType: string = "normal", color: string = "#000000", bottomMargin: number = 2) => {
    doc.setFontSize(fontSize);
    doc.setFont("helvetica", fontType);
    doc.setTextColor(color);
    
    // Split text to fit width
    const lines = doc.splitTextToSize(text, contentWidth);
    doc.text(lines, leftMargin, y);
    
    // Calculate new Y position
    const lineHeight = fontSize * 0.45; // Approximate conversion factor
    y += (lines.length * lineHeight) + bottomMargin + 2;
    
    // Page break check (simple)
    if (y > 280) {
      doc.addPage();
      y = 20;
    }
  };

  const addSectionHeader = (title: string) => {
    if (y > 260) { doc.addPage(); y = 20; }
    y += 4;
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.setTextColor("#0f172a"); // Dark Slate
    doc.text(title.toUpperCase(), leftMargin, y);
    y += 2;
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.5);
    doc.line(leftMargin, y, pageWidth - rightMargin, y);
    y += 6;
  };

  const addJobRole = (company: string, role: string, date: string, description: string) => {
    if (y > 250) { doc.addPage(); y = 20; }
    
    // Company & Date
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.setTextColor("#000000");
    doc.text(company, leftMargin, y);
    
    doc.setFont("helvetica", "normal");
    doc.setTextColor("#64748b");
    const dateWidth = doc.getTextWidth(date);
    doc.text(date, pageWidth - rightMargin - dateWidth, y);
    y += 5;

    // Role
    doc.setFont("helvetica", "italic");
    doc.setTextColor("#334155");
    doc.text(role, leftMargin, y);
    y += 5;

    // Description
    addWrappedText(description, 9, "normal", "#334155", 6);
  };

  // --- Content Generation ---

  // Header
  doc.setFontSize(22);
  doc.setFont("helvetica", "bold");
  doc.setTextColor("#0f172a");
  doc.text("DIMITRI ARNOLD", leftMargin, y);
  y += 8;

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.setTextColor("#64748b");
  doc.text("Phone: 638-8347  |  Email: dimitriarnold18@gmail.com", leftMargin, y);
  y += 12;

  // Professional Summary
  addSectionHeader("Professional Summary");
  addWrappedText(
    "Systems-focused professional with hands-on experience building AI-enabled websites, workflow automation, and spreadsheet-driven backend systems. Skilled in designing practical AI integrations, structuring operational data, and automating processes using Google Workspace, scripting, and web technologies. Brings a strong understanding of how systems perform in real operational environments, combining technical problem-solving with clarity, reliability, and adaptability.",
    9, "normal", "#334155", 4
  );

  // Technical Skills
  addSectionHeader("Technical Skills");
  
  const skillCategory = (title: string, items: string[]) => {
    doc.setFontSize(9);
    doc.setFont("helvetica", "bold");
    doc.setTextColor("#000000");
    doc.text(title + ":", leftMargin, y);
    const titleWidth = doc.getTextWidth(title + ": ");
    
    doc.setFont("helvetica", "normal");
    doc.setTextColor("#334155");
    const itemText = items.join(", ");
    const lines = doc.splitTextToSize(itemText, contentWidth - titleWidth);
    doc.text(lines, leftMargin + titleWidth + 2, y);
    y += (lines.length * 5) + 2;
  };

  skillCategory("AI & Automation", [
    "AI agents and assistants", "Prompt engineering", "RAG concepts", "AI-assisted extraction"
  ]);
  skillCategory("Data Systems", [
    "Google Sheets backends", "Apps Script automation", "SQL", "API integration"
  ]);
  skillCategory("Web & Interfaces", [
    "HTML/CSS/JS", "React & TypeScript", "AI-enhanced UIs", "Secure workflows"
  ]);
  skillCategory("Core Strengths", [
    "Systems thinking", "Workflow automation", "Structured data design", "Technical documentation"
  ]);
  y += 4;

  // Featured Projects
  addSectionHeader("Featured Projects & Systems");
  
  // Sneak Peek
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.setTextColor("#000000");
  doc.text("Sneak Peek — AI-Enhanced Website", leftMargin, y);
  y += 5;
  addWrappedText(
    "An AI-integrated website demonstrating how artificial intelligence can function directly within a live web environment. The platform includes an embedded AI assistant that interacts with structured product data, supports natural language queries, and enhances user discovery within the site. The system is designed around clean data structures and automated workflows, allowing AI-driven responses without manual intervention.",
    9, "normal", "#334155", 4
  );

  // DimDawg Finance
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.setTextColor("#000000");
  doc.text("DimDawg Finance — AI Financial Analysis Website", leftMargin, y);
  y += 5;
  addWrappedText(
    "An AI-powered financial analysis website built using spreadsheets as the core data engine. The platform automates calculations, structures financial data, and generates AI-assisted summaries and insights. This system demonstrates how spreadsheets can evolve into live analytical backends that support AI-driven interpretation, reporting, and decision support through a web interface.",
    9, "normal", "#334155", 4
  );

  // Experience
  addSectionHeader("Professional Experience");

  addJobRole(
    "Sneak Peek & Belize Sports and Promotions", 
    "Founder & Director", 
    "2020 – Present",
    "Designed, built, and maintained websites and internal systems incorporating AI assistants, spreadsheet-driven backends, and automated workflows. Responsible for system architecture, data structuring, automation logic, and ongoing optimization of AI-enabled web tools."
  );

  addJobRole(
    "High Court of Belize", 
    "Assistant to the Deputy Registrar", 
    "2019 – August 2024",
    "Provided administrative and technical support in a high-accuracy legal environment. Managed sensitive records, assisted with digitalization and structured archiving of case files, and supported process improvements to improve accessibility and data integrity."
  );

  addJobRole(
    "The Office Gurus", 
    "Customer Service Representative (Financial Leasing Campaign)", 
    "September 2025 – Present",
    "Supported a U.S.-based financial leasing program handling high volumes of inbound inquiries. Utilized CRM and workflow systems to resolve billing and account issues accurately while maintaining compliance and quality standards."
  );

  addJobRole(
    "Quick Stop", 
    "Loan Sales Agent & Customer Service Representative", 
    "August 2024 – February 2025",
    "Guided clients through loan applications, managed financial documentation, and handled high-volume communications. Maintained accurate records and supported transactional workflows."
  );

  addJobRole(
    "Transparent BPO", 
    "Customer Service Agent", 
    "2022 – 2023",
    "Delivered inbound customer support for a U.S. financial institution, assisting with mortgage and property title inquiries while maintaining high documentation and service standards."
  );

  // Education
  addSectionHeader("Education");
  
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.setTextColor("#000000");
  doc.text("St. John’s College Junior College (SJC JC)", leftMargin, y);
  doc.setFont("helvetica", "normal");
  const eduDate1 = "";
  doc.text(eduDate1, pageWidth - rightMargin - doc.getTextWidth(eduDate1), y);
  y += 5;
  doc.setFont("helvetica", "italic");
  doc.setTextColor("#334155");
  doc.text("Biology (Attended)", leftMargin, y);
  y += 6;

  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.setTextColor("#000000");
  doc.text("Edward P. Yorke High School", leftMargin, y);
  y += 5;
  doc.setFont("helvetica", "italic");
  doc.setTextColor("#334155");
  doc.text("Graduate", leftMargin, y);
  y += 8;

  // Additional Notes
  addSectionHeader("Additional Notes");
  const notes = [
    "Strong versatility with spreadsheets as operational backends",
    "Experience working in regulated and high-accuracy environments",
    "Comfortable translating operational needs into technical systems",
    "Focus on practical, maintainable automation and AI use"
  ];
  
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor("#334155");
  notes.forEach(note => {
    doc.text("• " + note, leftMargin, y);
    y += 5;
  });

  // Save the PDF
  doc.save("Dimitri_Arnold_Resume.pdf");
};