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

export function JadeTemplate({ data, accentColor, language, fontClass, fontSize }: TemplateProps) {
  const { personal, summary, experience, education, skills } = data;
  const t = useTranslation();
  const isArabic = language === 'ar';

  const accentStyle = { color: accentColor };
  const accentBorderStyle = { borderColor: accentColor };
  const baseFontSize = `${fontSize}px`;
  const smallFontSize = `${fontSize - 2}px`;
  const h2FontSize = `${fontSize + 10}px`;
  const h1FontSize = `${fontSize + 24}px`;
  const h3FontSize = `${fontSize + 2}px`;

  const Section: React.FC<{ title: string, children: React.ReactNode, className?: string}> = ({ title, children, className }) => (
    <section className={cn("mb-6", className)}>
        <h2 className="font-bold mb-4" style={{...accentStyle, fontSize: h2FontSize }}>{title}</h2>
        <div>
            {children}
        </div>
    </section>
  );

  return (
    <div className={cn("bg-white text-gray-800 p-8 flex-1 flex flex-col", fontClass)} style={{ fontSize: baseFontSize }} dir={isArabic ? 'rtl' : 'ltr'}>
        <header className="mb-8 border-b-4 pb-6 flex-shrink-0 flex gap-6" style={accentBorderStyle}>
            {personal.image && (
                <div className="flex-shrink-0">
                    <img src={personal.image} alt={personal.name} className="w-24 h-24 rounded-md object-cover" />
                </div>
            )}
            <div className="flex-1">
                <h1 className="font-bold break-words" style={{ fontSize: h1FontSize }}>{personal.name}</h1>
                <p className="break-words font-light mt-1" style={{...accentStyle, fontSize: h2FontSize }}>{personal.jobTitle}</p>
                 <div className="flex flex-wrap gap-x-4 gap-y-1 text-gray-600 mt-4 pt-2 border-t" style={{ ...accentBorderStyle, fontSize: smallFontSize }}>
                    {personal.email && <div className="flex items-center gap-2 break-all"><Mail className="w-4 h-4 flex-shrink-0"/>{personal.email}</div>}
                    {personal.phone && <div className="flex items-center gap-2 break-all"><Phone className="w-4 h-4 flex-shrink-0"/><span dir="ltr">{personal.phone}</span></div>}
                    {personal.address && <div className="flex items-center gap-2 break-words"><MapPin className="w-4 h-4 flex-shrink-0"/>{personal.address}</div>}
                    {personal.link && <div className="flex items-center gap-2 break-all"><LinkIcon className="w-4 h-4 flex-shrink-0"/>{personal.link}</div>}
                </div>
            </div>
        </header>
        
        <main className="flex-1 overflow-auto">
            <Section title={t.profileSummary}>
                <p className="whitespace-pre-wrap break-words">{summary}</p>
            </Section>

            <div className="grid grid-cols-2 gap-x-8">
                <div className="col-span-1">
                     <Section title={t.experience}>
                        {experience.map(exp => (
                            <div key={exp.id} className="mb-4">
                                <h3 className="font-bold break-words" style={{ fontSize: h3FontSize }}>{exp.role}</h3>
                                <div className="flex justify-between items-baseline">
                                    <p className="font-medium break-words">{exp.company}</p>
                                    <p className="text-gray-500 pl-2 text-right flex-shrink-0" style={{ fontSize: smallFontSize }}>{exp.date}</p>
                                </div>
                                <p className="text-gray-700 mt-1 whitespace-pre-wrap break-words">{exp.description}</p>
                            </div>
                        ))}
                    </Section>
                </div>
                <div className="col-span-1">
                     <Section title={t.education}>
                        {education.map(edu => (
                            <div key={edu.id} className="mb-4">
                                <h3 className="font-bold break-words">{edu.degree}</h3>
                                <p className="font-semibold break-words">{edu.institution}</p>
                                <p className="text-gray-500" style={{ fontSize: smallFontSize }}>{edu.date}</p>
                            </div>
                        ))}
                    </Section>
                     <Section title={t.skills}>
                        <ul className="flex flex-wrap gap-2">
                            {skills.map(skill => (
                            <li key={skill.id} className="px-3 py-1 rounded-full border" style={accentBorderStyle}>
                                {skill.name}
                            </li>
                            ))}
                        </ul>
                    </Section>
                </div>
            </div>
        </main>
    </div>
  );
}
