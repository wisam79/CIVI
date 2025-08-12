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

export function SapphireTemplate({ data, accentColor, language, fontClass, fontSize }: TemplateProps) {
  const { personal, summary, experience, education, skills } = data;
  const t = useTranslation();
  const isArabic = language === 'ar';

  const accentStyle = { color: accentColor };
  const accentBgStyle = { backgroundColor: accentColor };
  const baseFontSize = `${fontSize}px`;
  const smallFontSize = `${fontSize - 2}px`;
  const h2FontSize = `${fontSize + 10}px`;
  const h1FontSize = `${fontSize + 24}px`;
  const h3FontSize = `${fontSize + 2}px`;

  const Section: React.FC<{ title: string, children: React.ReactNode}> = ({ title, children}) => (
    <section className="mb-6">
        <h2 className="font-bold uppercase tracking-widest pb-2 border-b-2 mb-4" style={{...accentStyle, borderColor: accentColor, fontSize: h2FontSize }}>{title}</h2>
        {children}
    </section>
  );

  return (
    <div className={cn("bg-white text-gray-800 flex-1 flex flex-col", fontClass)} style={{ fontSize: baseFontSize }} dir={isArabic ? 'rtl' : 'ltr'}>
        <header className="p-8 flex-shrink-0 flex items-center gap-6" style={accentBgStyle}>
            {personal.image && (
                <div className="flex-shrink-0">
                    <img src={personal.image} alt={personal.name} className="w-24 h-24 rounded-full object-cover border-4 border-white/50" />
                </div>
            )}
            <div className="text-white">
                <h1 className="font-bold break-words" style={{ fontSize: h1FontSize }}>{personal.name}</h1>
                <p className="mt-1 break-words font-light tracking-wide" style={{ fontSize: h2FontSize }}>{personal.jobTitle}</p>
            </div>
        </header>
        <main className="p-8 flex-1 flex flex-col overflow-auto">
            <div className="grid grid-cols-3 gap-8">
                <div className="col-span-1">
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-bold uppercase tracking-wider mb-3" style={{...accentStyle, fontSize: h2FontSize }}>{t.contact}</h3>
                            <div className="space-y-1" style={{ fontSize: smallFontSize }}>
                                {personal.email && <div className="flex items-center gap-2 break-all"><Mail className="w-4 h-4 flex-shrink-0"/><span>{personal.email}</span></div>}
                                {personal.phone && <div className="flex items-center gap-2 break-all"><Phone className="w-4 h-4 flex-shrink-0"/><span dir="ltr">{personal.phone}</span></div>}
                                {personal.address && <div className="flex items-center gap-2 break-words"><MapPin className="w-4 h-4 flex-shrink-0"/><span>{personal.address}</span></div>}
                                {personal.link && <div className="flex items-center gap-2 break-all"><LinkIcon className="w-4 h-4 flex-shrink-0"/><span>{personal.link}</span></div>}
                            </div>
                        </div>
                        <Section title={t.skills}>
                            <ul className="space-y-2">
                                {skills.map(skill => (
                                <li key={skill.id} className="break-words">
                                    <span>{skill.name}</span>
                                </li>
                                ))}
                            </ul>
                        </Section>
                         <Section title={t.education}>
                            {education.map(edu => (
                                <div key={edu.id} className="mb-4">
                                    <h3 className="font-bold break-words">{edu.degree}</h3>
                                    <p className="font-semibold break-words">{edu.institution}</p>
                                    <p className="text-gray-500" style={{ fontSize: smallFontSize }}>{edu.date}</p>
                                </div>
                            ))}
                        </Section>
                    </div>
                </div>
                <div className="col-span-2">
                    <Section title={t.profileSummary}>
                        <p className="whitespace-pre-wrap break-words">{summary}</p>
                    </Section>
                     <Section title={t.experience}>
                        {experience.map(exp => (
                            <div key={exp.id} className="mb-4">
                                <h3 className="font-bold break-words" style={{ fontSize: h3FontSize }}>{exp.role}</h3>
                                <div className="flex justify-between items-baseline mb-1">
                                    <p className="font-semibold" style={accentStyle}>{exp.company}</p>
                                    <p className="text-gray-500 pl-2 text-right flex-shrink-0" style={{ fontSize: smallFontSize }}>{exp.date}</p>
                                </div>
                                <p className="mt-2 whitespace-pre-wrap break-words">{exp.description}</p>
                            </div>
                        ))}
                    </Section>
                </div>
            </div>
        </main>
    </div>
  );
}
