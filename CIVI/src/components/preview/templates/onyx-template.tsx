import type { CvData, Language } from "@/lib/types";
import { Mail, Phone, MapPin, Link as LinkIcon, User } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";
import { cn } from "@/lib/utils";

type TemplateProps = {
  data: CvData;
  accentColor: string;
  language: Language;
  fontClass: string;
  fontSize: number;
};

export function OnyxTemplate({ data, accentColor, language, fontClass, fontSize }: TemplateProps) {
  const { personal, summary, experience, education, skills } = data;
  const t = useTranslation();
  const isArabic = language === 'ar';

  const accentStyle = { color: accentColor };
  const accentBgStyle = { backgroundColor: accentColor };
  const accentBorderStyle = { borderColor: accentColor };
  const baseFontSize = `${fontSize}px`;
  const smallFontSize = `${fontSize - 2}px`;
  const h2FontSize = `${fontSize + 10}px`;
  const h1FontSize = `${fontSize + 24}px`;
  const h3FontSize = `${fontSize + 2}px`;

  const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="font-bold border-b-2 pb-2 mb-4" style={{...accentBorderStyle, fontSize: h2FontSize }}>{children}</h2>
  );

  return (
    <div className={cn("p-8 flex-1 flex flex-col bg-white text-gray-800", fontClass)} style={{ fontSize: baseFontSize }} dir={isArabic ? 'rtl' : 'ltr'}>
      <header className="text-center mb-6 border-b-4 pb-6 flex-shrink-0" style={accentBorderStyle}>
        {personal.image && (
            <div className="flex justify-center mb-4">
                 <img src={personal.image} alt={personal.name} className="w-28 h-28 rounded-full object-cover border-4" style={accentBorderStyle}/>
            </div>
        )}
        <h1 className="font-bold break-words" style={{ fontSize: h1FontSize }}>{personal.name}</h1>
        <p className="mt-1 break-words" style={{ fontSize: h2FontSize }}>{personal.jobTitle}</p>
      </header>

      <div className="flex justify-center items-center flex-wrap gap-x-6 gap-y-2 text-gray-600 mb-6 py-2 flex-shrink-0" style={{ fontSize: smallFontSize }}>
        {personal.email && <div className="flex items-center gap-2 break-all"><Mail className="w-4 h-4 flex-shrink-0"/>{personal.email}</div>}
        {personal.phone && <div className="flex items-center gap-2 break-all"><Phone className="w-4 h-4 flex-shrink-0"/><span dir="ltr">{personal.phone}</span></div>}
        {personal.address && <div className="flex items-center gap-2 break-words"><MapPin className="w-4 h-4 flex-shrink-0"/>{personal.address}</div>}
        {personal.link && <div className="flex items-center gap-2 break-all"><LinkIcon className="w-4 h-4 flex-shrink-0"/>{personal.link}</div>}
      </div>

      <main className="flex-1 overflow-auto">
        <section className="mb-6">
          <SectionTitle>{t.profileSummary}</SectionTitle>
          <p className="text-gray-700 whitespace-pre-wrap break-words">{summary}</p>
        </section>

        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <section className="mb-6">
              <SectionTitle>{t.experience}</SectionTitle>
              {experience.map(exp => (
                <div key={exp.id} className="mb-4">
                  <h3 className="font-bold break-words" style={{ fontSize: h3FontSize }}>{exp.role}</h3>
                  <div className="flex justify-between items-baseline mb-1">
                    <p className="font-semibold break-words" style={accentStyle}>{exp.company}</p>
                    <p className="text-gray-500 pl-2 text-right flex-shrink-0" style={{ fontSize: smallFontSize }}>{exp.date}</p>
                  </div>
                  <p className="text-gray-700 mt-1 whitespace-pre-wrap break-words">{exp.description}</p>
                </div>
              ))}
            </section>
            
            <section>
              <SectionTitle>{t.education}</SectionTitle>
              {education.map(edu => (
                <div key={edu.id} className="mb-4">
                  <h3 className="font-bold break-words">{edu.degree}</h3>
                  <div className="flex justify-between items-baseline mb-1">
                    <p className="font-semibold break-words" style={accentStyle}>{edu.institution}</p>
                    <p className="text-gray-500 pl-2 text-right flex-shrink-0" style={{ fontSize: smallFontSize }}>{edu.date}</p>
                  </div>
                   <p className="text-gray-700 mt-1 whitespace-pre-wrap break-words">{edu.description}</p>
                </div>
              ))}
            </section>
          </div>
          <div>
            <section>
              <SectionTitle>{t.skills}</SectionTitle>
              <ul className="space-y-2">
                {skills.map(skill => (
                  <li key={skill.id} className="flex items-center break-words">
                    <span className="h-1.5 w-1.5 rounded-full mr-2 flex-shrink-0" style={accentBgStyle}></span>
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
