import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Link, Mail } from 'lucide-react';

// 포트폴리오 데이터를 위한 타입 정의
interface Project {
  title: string;
  description: string;
  skills: string[];
  link: string;
  github?: string;
}

const myProjects: Project[] = [
  {
    title: "돌잔치 초대장 웹사이트",
    description: "React, TypeScript, Shadcn UI를 활용하여 만든 모바일 반응형 돌잔치 초대장입니다. 부모님 연락처, 오시는 길 정보, 지도 링크 등을 포함합니다.",
    skills: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    link: "https://ssilook.github.io/first-birthday-party",
    github: "https://github.com/ssilook/first-birthday-party"
  },
  {
    title: "두 번째 프로젝트 타이틀",
    description: "이곳에 프로젝트에 대한 상세 설명을 작성해주세요. 어떤 기술을 사용했고, 어떤 문제를 해결했는지 등을 포함하면 좋습니다.",
    skills: ["Next.js", "GraphQL", "Tailwind CSS"],
    link: "https://example.com/project2",
    github: "https://github.com/your-username/project2"
  },
  {
    title: "세 번째 프로젝트 타이틀",
    description: "이곳에 프로젝트에 대한 상세 설명을 작성해주세요. 예를 들어, 웹 애플리케이션의 주요 기능과 사용 경험에 대해 설명할 수 있습니다.",
    skills: ["Vue.js", "Pinia", "Firebase"],
    link: "https://example.com/project3"
  }
];

function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen p-4 sm:p-8">
      {/* --- 상단 프로필 섹션 --- */}
      <header className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border">
        <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700 shadow-inner">
          <img 
            src="https://placehold.co/128x128/FFE4E1/F08080?text=Profile" 
            alt="프로필 사진" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="text-center sm:text-left flex-grow">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            강신욱
          </h1>
          <p className="text-md sm:text-lg text-gray-600 dark:text-gray-400 mt-1">
            프론트엔드 개발자
          </p>
          <div className="flex justify-center sm:justify-start space-x-3 mt-4">
            <a href="https://github.com/ssilook" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <Github size={24} />
              </Button>
            </a>
            <a href="mailto:your-email@example.com" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <Mail size={24} />
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* --- 소개 섹션 --- */}
      <section className="max-w-4xl mx-auto mt-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
          소개
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
          안녕하세요, 사용자 경험을 중요하게 생각하는 프론트엔드 개발자 강신욱입니다. React와 TypeScript를 기반으로 안정적이고 효율적인 웹 애플리케이션을 개발합니다. Shadcn UI와 Tailwind CSS를 활용한 깔끔하고 반응형 디자인 구현에 관심이 많습니다. 새로운 기술을 배우고 적용하는 것을 즐기며, 동료들과 협업을 통해 시너지를 내는 개발을 지향합니다.
        </p>
      </section>

      {/* --- 프로젝트 섹션 --- */}
      <section className="max-w-4xl mx-auto mt-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">
          프로젝트
        </h2>
        <div className="grid gap-6">
          {myProjects.map((project, index) => (
            <Card key={index} className="flex flex-col sm:flex-row items-start p-4 hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex-shrink-0 p-0 sm:pr-4">
                <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </CardTitle>
                <CardDescription className="hidden sm:block mt-1 text-gray-600 dark:text-gray-400">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow p-0 mt-4 sm:mt-0">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary">{skill}</Badge>
                  ))}
                </div>
                <p className="sm:hidden text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
                <div className="flex items-center space-x-3 mt-4">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="default" className="w-auto">
                      <Link className="mr-2 h-4 w-4" />
                      데모 보기
                    </Button>
                  </a>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-auto">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* --- 푸터 섹션 --- */}
      <footer className="max-w-4xl mx-auto mt-8 p-6 text-center text-gray-500 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Kang Sinook. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
