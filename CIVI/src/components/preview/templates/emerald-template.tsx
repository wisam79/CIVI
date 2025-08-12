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

export function EmeraldTemplate({ data, accentColor, language, fontClass, fontSize }: TemplateProps) {
  const { personal, summary, experience, education, skills } = data;
  const t = useTranslation();
  const isArabic = language === 'ar';
  
  const accentBorderStyle = { borderColor: accentColor };
  const baseFontSize = `${fontSize}px`;
  const smallFontSize = `${fontSize - 2}px`;
  const h2FontSize = `${fontSize + 10}px`;
  const h1FontSize = `${fontSize + 24}px`;
  const h3FontSize = `${fontSize + 2}px`;

  const Section: React.FC<{ title: string, children: React.ReactNode, className?: string}> = ({ title, children, className }) => (
    <section className={cn("mb-6", className)}>
        <h2 className={cn("font-bold mb-4 text-center border-b-2 pb-2")} style={{...accentBorderStyle, fontSize: h2FontSize }}>{title}</h2>
        <div>
            {children}
        </div>
    </section>
  );

  return (
    <div className={cn("bg-white text-gray-800 p-8 flex-1 flex flex-col", fontClass)} style={{ fontSize: baseFontSize }} dir={isArabic ? 'rtl' : 'ltr'}>
        <header className="text-center mb-6 border-b-4 pb-6 flex-shrink-0" style={accentBorderStyle}>
            {personal.image && (
                <div className="flex justify-center mb-4">
                    <img src={personal.image} alt={personal.name} className="w-24 h-24 rounded-full object-cover border-4" style={accentBorderStyle}/>
                </div>
            )}
            <h1 className="font-bold break-words" style={{ fontSize: h1FontSize }}>{personal.name}</h1>
            <p className="mt-1 break-words" style={{ fontSize: h2FontSize }}>{personal.jobTitle}</p>
        </header>

        <div className="flex justify-center items-center flex-wrap gap-x-6 gap-y-2 text-gray-600 my-6 flex-shrink-0" style={{ fontSize: smallFontSize }}>
            {personal.email && <div className="flex items-center gap-2 break-all"><Mail className="w-4 h-4 flex-shrink-0"/>{personal.email}</div>}
            {personal.phone && <div className="flex items-center gap-2 break-all"><Phone className="w-4 h-4 flex-shrink-0"/><span dir="ltr">{personal.phone}</span></div>}
            {personal.address && <div className="flex items-center gap-2 break-words"><MapPin className="w-4 h-4 flex-shrink-0"/>{personal.address}</div>}
            {personal.link && <div className="flex items-center gap-2 break-all"><LinkIcon className="w-4 h-4 flex-shrink-0"/>{personal.link}</div>}
        </div>
        
        <main className="flex-1 overflow-auto">
            <Section title={t.profileSummary}>
                <p className="text-center whitespace-pre-wrap break-words">{summary}</p>
            </Section>

             <Section title={t.experience}>
                {experience.map(exp => (
                    <div key={exp.id} className="mb-4">
                        <h3 className="font-bold break-words text-center" style={{ fontSize: h3FontSize }}>{exp.role}</h3>
                        <div className="flex justify-center items-baseline mb-1">
                             <p className="font-semibold break-words">{exp.company}</p>
                        </div>
                        <p className="text-gray-500 text-center mb-2" style={{ fontSize: smallFontSize }}>{exp.date}</p>
                        <p className="text-gray-700 mt-1 whitespace-pre-wrap break-words text-center">{exp.description}</p>
                    </div>
                ))}
            </Section>
            
            <div className="grid grid-cols-2 gap-8">
                <Section title={t.education}>
                    {education.map(edu => (
                        <div key={edu.id} className="mb-4 text-center">
                            <h3 className="font-bold break-words">{edu.degree}</h3>
                            <p className="font-semibold break-words">{edu.institution}</p>
                            <p className="text-gray-500" style={{ fontSize: smallFontSize }}>{edu.date}</p>
                        </div>
                    ))}
                </Section>
                <Section title={t.skills}>
                    <ul className="flex flex-wrap justify-center gap-2">
                        {skills.map(skill => (
                        <li key={skill.id} className="px-3 py-1 rounded bg-gray-100">
                            {skill.name}
                        </li>
                        ))}
                    </ul>
                </Section>
            </div>
        </main>
    </div>
  );
}
