import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Mail } from 'lucide-react';
import Billing1 from "@/assets/images/Billing1.png";
import Billing2 from "@/assets/images/Billing2.png";
import Ops1 from "@/assets/images/Ops1.png";
import BSS1 from "@/assets/images/BSS1.png";
import BSS2 from "@/assets/images/BSS2.png";

interface Project {
  title: string;
  description: string;
  skills: string[];
  role: string;
  doneList: string[];
  link?: string;
  github?: string;
  images?: string[];
}

const myProjects: Project[] = [
  {
    title: "AIR BSS(AI Ready Business Support System)",
    description: "AWS, GCP, Azure 등 다양한 CSP의 통합 청구/운영 시스템을 관리하는 Admin 웹페이지 구축",
    skills: ["React", "TypeScript", "VITE", "MUI", "Zustand"],
    role: "프론트엔드 초기 구조 설계, FE 개발 리딩",
    doneList:[
      "Vite와 TypeScript를 사용한 프로젝트 초기 설정 및 구조 설계",
      "통합 로그인 인증 시스템 연동 구현 (OIDC(openid connect) + 도메인 기반 Client Key 구조)",
      "React Router DOM을 이용한 페이지 라우팅 및 레이아웃 관리",
      "재사용 가능한 컴포넌트 설계 및 개발",
      "MUI 기반 디자인 시스템 커스터마이징",
      "다수 CSP 데이터를 통합적으로 렌더링하는 컴포넌트 구조 설계",
      "dev/stg/prd 브랜치 운영과 버저닝 체계 관리"
    ],
    images: [BSS1, BSS2]
  },
  {
    title: "HyperBilling 3.0",
    description: "AWS Billing 내역을 기업 고객에게 시각화하여 제공하는 내부 SaaS 서비스",
    skills: ["Vue.js", "javascript", "Vuex"],
    role: "프론트엔드 구조 설계 및 성능 개선, 템플릿 기반 리뉴얼 주도",
    doneList: [
      "공통 컴포넌트 시스템 자체 구축 (기획/디자인 없이 개발자 주도 설계)",
      "서비스 속도 개선 및 유지보수 편의성을 위한 구조화",
      "기존 2.0 대비 성능 향상 및 기능 개선",
      "유료 템플릿 기반의 재구조화 및 리뉴얼 (총 5개 서비스 적용)"
    ],
    images: [Billing1, Billing2, Ops1]
  }
];

function Home() {
  return (
    <div className="bg-gray-50min-h-screen">
      {/* --- 상단 프로필 섹션 --- */}
      <header className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-8 p-6 rounded-xl shadow-lg border">
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
            Frontend Developer
          </p>
          <div className="flex justify-center sm:justify-start space-x-3 mt-4">
            <a href="https://github.com/ssilook" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <Github size={24} />
              </Button>
            </a>
            <a href="mailto:sokang337@gmail.com" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <Mail size={24} />
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* --- 소개 섹션 --- */}
      <section className="max-w-4xl mx-auto mt-8 p-6 rounded-xl shadow-lg border">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
          소개
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
저는 11년 이상의 프론트엔드 개발 경력을 가진 개발자로 다양한 산업 도메인의 요구사항을 반영한 웹 서비스를 구축해 왔습니다.<br />
전자결재 솔루션 중심의 그룹웨어 커스터마이징을 시작으로 이후 SI 및 연구소에서 MS BotFramework를 활용한 커스터마이징 챗봇을 개발했습니다.<br />
현재는 메가존 클라우드에서 AWS 기반 Billing 시스템을 Vue.js로 개발/운영하며 점차 React와 TypeScript로 기술 스택을 전환하고 있습니다.<br />
특히 AIR BSS 프로젝트에서는 사내 디자인 시스템과 MUI를 활용하여 대규모 Admin Center를 구축하고<br />
통합 인증 시스템 연동 등 다양한 기술적 과제를 주도적으로 해결하였습니다.<br />
Vue.js에서 React로 넘어가는 과정에서 러닝커브를 빠르게 극복하고 팀 내 기획 및 개발 방향을 주도하기도 했으며<br />
코드 품질과 협업을 중요시하여 GitHub PR 리뷰 문화를 적극 실천하고 있습니다.변화에 유연하게 대응하며<br />
주어진 환경에서 항상 최선의 기술적 선택을 하려 노력하는 개발자입니다.
        </p>
      </section>

      {/* --- 프로젝트 섹션 --- */}
      <section className="max-w-4xl mx-auto mt-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">
          프로젝트
        </h2>
        <div className="grid gap-6">
          {myProjects.map((project, index) => (
            <Card key={index} className="flex flex-col p-4 hover:shadow-xl transition-shadow duration-300">
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
                {project.images &&
                  <div className='flex mb-5'>
                    {project.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        className={`w-1/${project.images?.length ?? 1} h-auto rounded-lg object-cover border border-border`}
                      />
                    ))}
                  </div>
                }
              </CardContent>
              <CardContent className="flex-grow p-0 mt-4 sm:mt-0">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold border-l-4 border-primary pl-3">
                    역할
                  </h3>
                  <p className="text-muted-foreground leading-relaxed dark:text-gray-400">
                    {project.role}
                  </p>
                </div>
              </CardContent>
              <CardContent className="flex-grow p-0 mt-4 sm:mt-0">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold border-l-4 border-primary pl-3">
                    Things done
                  </h3>
                  <ul className="list-disc list-inside space-y-2 pt-2 text-muted-foreground dark:text-gray-400">
                    {project.doneList.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
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

export default Home;
