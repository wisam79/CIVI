import type { CvData, Language } from "@/lib/types";
import { Mail, Phone, MapPin, Link as LinkIcon, Briefcase, GraduationCap, Star, User } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";
import { cn } from "@/lib/utils";

type TemplateProps = {
  data: CvData;
  accentColor: string;
  language: Language;
  fontClass: string;
  fontSize: number;
};

export function AmethystTemplate({ data, accentColor, language, fontClass, fontSize }: TemplateProps) {
  const { personal, summary, experience, education, skills } = data;
  const t = useTranslation();

  const accentStyle = { color: accentColor };
  const isArabic = language === 'ar';
  const baseFontSize = `${fontSize}px`;
  const smallFontSize = `${fontSize - 2}px`;
  const h2FontSize = `${fontSize + 10}px`;
  const h1FontSize = `${fontSize + 24}px`;
  const h3FontSize = `${fontSize + 2}px`;

  const Section: React.FC<{ title: string, children: React.ReactNode, icon: React.ElementType }> = ({ title, children, icon: Icon }) => (
    <section className="mb-6">
        <div className="flex items-center mb-4">
            <Icon className="w-6 h-6" style={accentStyle} />
            <h2 className={cn("font-bold", isArabic ? "mr-3" : "ml-3")} style={{ fontSize: h2FontSize }}>{title}</h2>
        </div>
        <div className={cn("pl-9", isArabic && "pr-9 pl-0")}>
            {children}
        </div>
    </section>
  );

  return (
    <div className={cn("bg-white text-gray-800 p-8 flex-1 flex flex-col", fontClass)} style={{ fontSize: baseFontSize }} dir={isArabic ? 'rtl' : 'ltr'}>
        <header className="mb-8 relative flex-shrink-0 flex items-center">
            {personal.image ? (
                <img src={personal.image} alt={personal.name} className="w-24 h-24 rounded-full object-cover border-4" style={{borderColor: accentColor}} />
            ) : (
                <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center border-4" style={{borderColor: accentColor}}>
                    <User className="w-12 h-12 text-gray-500" />
                </div>
            )}
            <div className="absolute top-0" style={{ [isArabic ? 'right' : 'left']: '7.5rem' }}>
                <h1 className="font-bold break-words" style={{ fontSize: h1FontSize }}>{personal.name}</h1>
                <p className="mt-1 break-words font-light tracking-wide" style={{...accentStyle, fontSize: h2FontSize }}>{personal.jobTitle}</p>
            </div>
        </header>
        
        <main className="flex-1 overflow-auto">
            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-4">
                    <div className="space-y-6">
                        <Section title={t.contact} icon={Mail}>
                            <div className="space-y-1" style={{ fontSize: smallFontSize }}>
                                {personal.email && <div className="flex items-center gap-2 break-all"><Mail className="w-4 h-4 flex-shrink-0"/><span>{personal.email}</span></div>}
                                {personal.phone && <div className="flex items-center gap-2 break-all"><Phone className="w-4 h-4 flex-shrink-0"/><span dir="ltr">{personal.phone}</span></div>}
                                {personal.address && <div className="flex items-center gap-2 break-words"><MapPin className="w-4 h-4 flex-shrink-0"/><span>{personal.address}</span></div>}
                                {personal.link && <div className="flex items-center gap-2 break-all"><LinkIcon className="w-4 h-4 flex-shrink-0"/><span>{personal.link}</span></div>}
                            </div>
                        </Section>
                         <Section title={t.skills} icon={Star}>
                            <ul className="space-y-2">
                                {skills.map(skill => (
                                <li key={skill.id} className="break-words">
                                    <span>{skill.name}</span>
                                </li>
                                ))}
                            </ul>
                        </Section>
                    </div>
                </div>

                <div className="col-span-8">
                    <Section title={t.profileSummary} icon={User}>
                        <p className="text-gray-700 whitespace-pre-wrap break-words">{summary}</p>
                    </Section>
                    <Section title={t.experience} icon={Briefcase}>
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
                    <Section title={t.education} icon={GraduationCap}>
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
        </main>
    </div>
  );
}
