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

export function RubyTemplate({ data, accentColor, language, fontClass, fontSize }: TemplateProps) {
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

  const Section: React.FC<{ title: string, children: React.ReactNode, className?: string}> = ({ title, children, className }) => (
    <section className={cn("mb-6", className)}>
        <h2 className="font-bold mb-4" style={{...accentStyle, fontSize: h2FontSize }}>{title}</h2>
        {children}
    </section>
  );

  return (
    <div className={cn("bg-gray-50 text-gray-800 p-2 flex-1 flex flex-col", fontClass)} style={{ fontSize: baseFontSize }} dir={isArabic ? 'rtl' : 'ltr'}>
        <div className="bg-white p-6 shadow-lg h-full flex flex-col">
            <header className="flex flex-col md:flex-row items-start justify-between mb-8 border-b-4 pb-6 flex-shrink-0" style={accentBorderStyle}>
                {personal.image && (
                    <div className="flex-shrink-0 mb-4 md:mb-0" style={{[isArabic ? 'marginLeft' : 'marginRight']: '1.5rem'}}>
                        <img src={personal.image} alt={personal.name} className="w-24 h-24 rounded-md object-cover"/>
                    </div>
                )}
                <div className="flex-1">
                    <h1 className="font-bold break-words" style={{ fontSize: h1FontSize }}>{personal.name}</h1>
                    <p className="mt-1 break-words" style={{ fontSize: h2FontSize }}>{personal.jobTitle}</p>
                </div>
                <div className="text-right space-y-1 mt-4 md:mt-0 flex-shrink-0" style={{ fontSize: smallFontSize }}>
                    {personal.email && <div className="flex items-center justify-end gap-2 break-all"><span className="text-right">{personal.email}</span><Mail className="w-4 h-4 flex-shrink-0"/></div>}
                    {personal.phone && <div className="flex items-center justify-end gap-2 break-all"><span dir="ltr" className="text-right">{personal.phone}</span><Phone className="w-4 h-4 flex-shrink-0"/></div>}
                    {personal.address && <div className="flex items-center justify-end gap-2 break-words"><span className="text-right">{personal.address}</span><MapPin className="w-4 h-4 flex-shrink-0"/></div>}
                    {personal.link && <div className="flex items-center justify-end gap-2 break-all"><span className="text-right">{personal.link}</span><LinkIcon className="w-4 h-4 flex-shrink-0"/></div>}
                </div>
            </header>
            
            <main className="flex-1 overflow-auto mt-4">
                <Section title={t.profileSummary}>
                    <p className="text-gray-700 whitespace-pre-wrap break-words">{summary}</p>
                </Section>

                <div className="flex gap-8">
                    <div className="w-2/3">
                         <Section title={t.experience}>
                            {experience.map(exp => (
                                <div key={exp.id} className="mb-4">
                                    <h3 className="font-bold break-words" style={{ fontSize: h3FontSize }}>{exp.role}</h3>
                                    <div className="flex justify-between items-baseline mb-1">
                                        <p className="font-semibold break-words">{exp.company}</p>
                                        <p className="text-gray-500 pl-2 text-right flex-shrink-0" style={{ fontSize: smallFontSize }}>{exp.date}</p>
                                    </div>
                                    <p className="text-gray-700 mt-1 whitespace-pre-wrap break-words">{exp.description}</p>
                                </div>
                            ))}
                        </Section>
                    </div>
                    <div className="w-1/3">
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
                            <ul className="space-y-2">
                                {skills.map(skill => (
                                <li key={skill.id} className="flex items-center gap-2 break-words">
                                    <div className="w-2 h-2 rounded-full" style={accentBgStyle}></div>
                                    <span>{skill.name}</span>
                                </li>
                                ))}
                            </ul>
                        </Section>
                    </div>
                </div>
            </main>
        </div>
    </div>
  );
}
