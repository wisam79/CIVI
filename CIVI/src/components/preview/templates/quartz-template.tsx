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

export function QuartzTemplate({ data, accentColor, language, fontClass, fontSize }: TemplateProps) {
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
        <h2 className="font-bold mb-4" style={{ fontSize: h2FontSize }}>{title}</h2>
        <div className="border-t-2" style={accentBorderStyle}></div>
        <div className="mt-4">
            {children}
        </div>
    </section>
  );

  return (
    <div className={cn("bg-white text-gray-700 p-8 flex-1 flex flex-col", fontClass)} style={{ fontSize: baseFontSize }} dir={isArabic ? 'rtl' : 'ltr'}>
        <header className="text-center mb-8 border-b-4 pb-6 flex-shrink-0" style={accentBorderStyle}>
             {personal.image && (
                <div className="flex justify-center mb-4">
                    <img src={personal.image} alt={personal.name} className="w-24 h-24 rounded-full object-cover"/>
                </div>
            )}
            <h1 className="font-extrabold break-words" style={{...accentStyle, fontSize: h1FontSize }}>{personal.name}</h1>
            <p className="mt-2 break-words font-light tracking-widest uppercase" style={{ fontSize: h2FontSize }}>{personal.jobTitle}</p>
        </header>

        <main className="grid grid-cols-12 gap-8 flex-1 overflow-auto">
            <aside className="col-span-4">
                <div className="space-y-6">
                    <div>
                        <h3 className="font-bold mb-4" style={{ fontSize: h2FontSize }}>{t.contact}</h3>
                        <div className="space-y-1" style={{ fontSize: smallFontSize }}>
                            {personal.email && <div className="flex items-center gap-3 break-all"><Mail className="w-4 h-4 flex-shrink-0" style={accentStyle}/><span>{personal.email}</span></div>}
                            {personal.phone && <div className="flex items-center gap-3 break-all"><Phone className="w-4 h-4 flex-shrink-0" style={accentStyle}/><span dir="ltr">{personal.phone}</span></div>}
                            {personal.address && <div className="flex items-center gap-3 break-words"><MapPin className="w-4 h-4 flex-shrink-0" style={accentStyle}/><span>{personal.address}</span></div>}
                            {personal.link && <div className="flex items-center gap-3 break-all"><LinkIcon className="w-4 h-4 flex-shrink-0" style={accentStyle}/><span>{personal.link}</span></div>}
                        </div>
                    </div>

                    <Section title={t.education}>
                        {education.map(edu => (
                            <div key={edu.id} className="mb-4">
                                <h3 className="font-bold break-words">{edu.degree}</h3>
                                <p className="font-semibold text-gray-800 break-words">{edu.institution}</p>
                                <p className="text-gray-500" style={{ fontSize: smallFontSize }}>{edu.date}</p>
                            </div>
                        ))}
                    </Section>

                     <Section title={t.skills}>
                        <ul className="flex flex-wrap gap-2">
                            {skills.map(skill => (
                            <li key={skill.id} className="px-3 py-1 rounded-full text-white" style={accentBgStyle}>
                                {skill.name}
                            </li>
                            ))}
                        </ul>
                    </Section>
                </div>
            </aside>
            <div className="col-span-8">
                <Section title={t.profileSummary}>
                    <p className="whitespace-pre-wrap break-words">{summary}</p>
                </Section>
                <Section title={t.experience}>
                    {experience.map(exp => (
                        <div key={exp.id} className="mb-5">
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
        </main>
    </div>
  );
}
