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

export function TopazTemplate({ data, accentColor, language, fontClass, fontSize }: TemplateProps) {
  const { personal, summary, experience, education, skills } = data;
  const t = useTranslation();

  const accentStyle = { color: accentColor };
  const accentBgStyle = { backgroundColor: accentColor };
  const isArabic = language === 'ar';
  const baseFontSize = `${fontSize}px`;
  const smallFontSize = `${fontSize - 2}px`;
  const h2FontSize = `${fontSize + 10}px`;
  const h1FontSize = `${fontSize + 16}px`;
  const h3FontSize = `${fontSize + 2}px`;


  const Section: React.FC<{icon: React.ElementType, title: string, children: React.ReactNode}> = ({icon: Icon, title, children}) => (
    <section className="mb-6">
        <div className="flex items-center mb-4">
            <div className="p-1.5 rounded-md" style={accentBgStyle}>
                <Icon className="w-5 h-5 text-white"/>
            </div>
            <h2 className={cn("font-bold", isArabic ? "mr-3" : "ml-3")} style={{ fontSize: h2FontSize }}>{title}</h2>
        </div>
        {children}
    </section>
  );

  return (
    <div className={cn("bg-white text-gray-800 flex-1 flex", fontClass)} style={{ fontSize: baseFontSize }} dir={isArabic ? 'rtl' : 'ltr'}>
        <aside className="w-1/3 p-8 text-white flex flex-col" style={accentBgStyle}>
            <div className="flex flex-col items-center mb-8 flex-shrink-0">
                 {personal.image ? (
                    <img src={personal.image} alt={personal.name} className="w-32 h-32 rounded-full object-cover border-4 border-white mb-4" />
                ) : (
                    <div className="w-32 h-32 rounded-full bg-white mb-4 flex items-center justify-center border-4 border-white">
                        <User className="w-20 h-20" style={accentStyle} />
                    </div>
                )}
                <h1 className="font-bold text-center break-words" style={{ fontSize: h1FontSize }}>{personal.name}</h1>
                <p className="mt-1 text-center break-words" style={{ fontSize: h3FontSize }}>{personal.jobTitle}</p>
            </div>
            
            <div className="flex-1 overflow-auto">
                <div className="space-y-1" style={{ fontSize: smallFontSize }}>
                    {personal.email && <div className="flex items-start gap-2 break-all"><Mail className="w-4 h-4 mt-0.5 flex-shrink-0"/><span>{personal.email}</span></div>}
                    {personal.phone && <div className="flex items-start gap-2 break-all"><Phone className="w-4 h-4 mt-0.5 flex-shrink-0"/><span dir="ltr">{personal.phone}</span></div>}
                    {personal.address && <div className="flex items-start gap-2 break-words"><MapPin className="w-4 h-4 mt-0.5 flex-shrink-0"/><span>{personal.address}</span></div>}
                    {personal.link && <div className="flex items-start gap-2 break-all"><LinkIcon className="w-4 h-4 mt-0.5 flex-shrink-0"/><span>{personal.link}</span></div>}
                </div>

                 <section className="mt-8">
                    <h2 className="font-bold mb-4" style={{ fontSize: h2FontSize }}>{t.skills}</h2>
                    <ul className="space-y-2">
                        {skills.map(skill => (
                        <li key={skill.id} className="break-words">
                            <span>{skill.name}</span>
                        </li>
                        ))}
                    </ul>
                </section>
            </div>
        </aside>
        <main className="w-2/3 p-8 overflow-auto">
             <Section icon={User} title={t.profileSummary}>
                 <p className="text-gray-700 whitespace-pre-wrap break-words">{summary}</p>
             </Section>
            
            <Section icon={Briefcase} title={t.experience}>
                {experience.map(exp => (
                    <div key={exp.id} className="mb-4 relative pl-5" style={{ [isArabic ? 'paddingRight' : 'paddingLeft']: '1.25rem', [isArabic ? 'paddingLeft' : 'paddingRight']: '0' }}>
                        <div className="absolute h-full w-0.5" style={{...accentBgStyle, [isArabic ? 'right' : 'left']: '0.2rem'}}></div>
                        <div className="absolute w-2.5 h-2.5 rounded-full mt-1.5" style={{...accentBgStyle, [isArabic ? 'right' : 'left']: '-0.125rem'}}></div>
                        <h3 className="font-bold break-words" style={{ fontSize: h3FontSize }}>{exp.role}</h3>
                        <div className="flex justify-between items-baseline mb-1">
                            <p className="font-semibold break-words">{exp.company}</p>
                            <p className="text-gray-500 pl-2 text-right flex-shrink-0" style={{ fontSize: smallFontSize }}>{exp.date}</p>
                        </div>
                        <p className="text-gray-700 mt-1 whitespace-pre-wrap break-words">{exp.description}</p>
                    </div>
                ))}
            </Section>
            
            <Section icon={GraduationCap} title={t.education}>
                {education.map(edu => (
                    <div key={edu.id} className="mb-4 relative pl-5" style={{ [isArabic ? 'paddingRight' : 'paddingLeft']: '1.25rem', [isArabic ? 'paddingLeft' : 'paddingRight']: '0' }}>
                        <div className="absolute h-full w-0.5" style={{...accentBgStyle, [isArabic ? 'right' : 'left']: '0.2rem'}}></div>
                        <div className="absolute w-2.5 h-2.5 rounded-full mt-1.5" style={{...accentBgStyle, [isArabic ? 'right' : 'left']: '-0.125rem'}}></div>
                        <h3 className="font-bold break-words">{edu.degree}</h3>
                        <div className="flex justify-between items-baseline mb-1">
                            <p className="font-semibold break-words">{edu.institution}</p>
                            <p className="text-gray-500 pl-2 text-right flex-shrink-0" style={{ fontSize: smallFontSize }}>{edu.date}</p>
                        </div>
                        <p className="text-gray-700 mt-1 whitespace-pre-wrap break-words">{edu.description}</p>
                    </div>
                ))}
            </Section>
        </main>
    </div>
  );
}
