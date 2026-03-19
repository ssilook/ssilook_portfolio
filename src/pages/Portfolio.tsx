import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Mail, ExternalLink, X } from 'lucide-react';
import { useState } from 'react';
import Billing1 from "@/assets/images/Billing1.png";
import Billing2 from "@/assets/images/Billing2.png";
import Ops1 from "@/assets/images/Ops1.png";
import BSS1 from "@/assets/images/BSS1.png";
import BSS2 from "@/assets/images/BSS2.png";

interface SkillSet {
  frontend?: string[];
  backend?: string[];
  common?: string[];
}

interface Project {
  title: string;
  description: string;
  skills: string[] | SkillSet;
  role: string;
  doneList: string[];
  link?: string;
  github?: string;
  images?: string[];
  imagePlaceholder?: boolean;
}

const myProjects: Project[] = [
  {
    title: "MZC 공식홈페이지",
    link: "https://www.megazone.com/",
    description: "메가존클라우드 공식 웹사이트 추가개발 및 유지보수, CMS화 전략",
    skills: {
      frontend: ["Next.js", "TypeScript", "GraphQL", "MUI", "Styled CSS", "Zustand"],
      backend: ["Strapi(React.js)", "TypeScript", "GraphQL"],
    },
    role: "Frontend/Backend 개발 담당, Jira를 활용한 릴리즈 관리, 기획자·디자이너·인프라와의 크로스펑셔널 소통",
    doneList: [
      "인수인계 받은 프로젝트의 기존 문서 파악 및 구조 분석",
      "하드코딩 되어 있던 콘텐츠를 Strapi CMS 기반으로 전환하여 구조 개선",
      "i18n(다국어) 적용을 통한 글로벌 대응 체계 구축",
      "Strapi Content Type Builder 개선 및 재설계",
      "추가 페이지 작업을 전면 CMS화하여 콘텐츠 재사용성 극대화",
      "기획자·디자이너와의 지속적 소통을 통한 요구사항 반영 및 일정 조율",
      "LLM 기반 AI 코딩 어시스턴트(Vibe Coding)를 활용한 개발 생산성 향상 및 코드 품질 개선",
    ],
    imagePlaceholder: true,
  },
  {
    title: "AIR BSS(AI Ready Business Support System)",
    description: "AWS, GCP, Azure 등 다양한 CSP의 통합 청구/운영 시스템을 관리하는 Admin 웹페이지 구축",
    skills: {
      frontend: ["React", "TypeScript", "VITE", "MUI", "Zustand"],
    },
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
    skills: {
      frontend: ["Vue.js", "JavaScript", "Vuex", "REST API", "CSS"],
    },
    role: "프론트엔드 구조 설계 및 성능 개선, 템플릿 기반 리뉴얼 주도",
    doneList: [
      "공통 컴포넌트 시스템 자체 구축 (기획/디자인 없이 개발자 주도 설계)",
      "서비스 속도 개선 및 유지보수 편의성을 위한 구조화",
      "기존 2.0 대비 성능 향상 및 기능 개선",
      "유료 템플릿 기반의 재구조화 및 리뉴얼 (총 5개 서비스 적용)",
      "Vue 3 전환 대비 Vue 2.7 선제 업그레이드 및 Options API → Composition API 점진적 마이그레이션"
    ],
    images: [Billing1, Billing2, Ops1]
  }
];

function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
전자결재 솔루션 중심의 그룹웨어 커스터마이징을 시작으로, SI 및 연구소에서 MS BotFramework를 활용한 커스터마이징 챗봇을 개발했습니다.<br />
<br />
메가존클라우드에서는 AWS 기반 Billing 시스템(HyperBilling)을 Vue.js로 개발·운영하며, Vue 2.7 업그레이드와 Composition API 점진적 마이그레이션을 주도했습니다.<br />
이후 AIR BSS 프로젝트에서 React와 TypeScript로 기술 스택을 전환하여 MUI 기반 대규모 Admin Center를 구축하고, OIDC 통합 인증 연동 등 핵심 과제를 해결하였습니다.<br />
<br />
현재는 메가존클라우드 공식홈페이지의 Next.js + Strapi 기반 CMS화 전략을 수행하며, Frontend뿐 아니라 Backend(Strapi) 개발과 Jira 릴리즈 관리까지 영역을 확장하고 있습니다.<br />
또한 LLM 기반 AI 코딩 어시스턴트(Claude, ChatGPT 등)를 적극 활용하여 코드 작성·리팩토링·테스트 코드 생성 등 개발 전반의 생산성을 높이고 있으며,<br />
반복적인 작업의 자동화와 코드 리뷰 보조를 통해 개발 정밀도를 향상시키고 작업 시간을 단축하는 데 효과를 보고 있습니다.<br />
<br />
기획자·디자이너·인프라 등 다양한 직군과의 소통을 통해 프로젝트를 주도하며, 코드 품질과 협업을 중시하여 GitHub PR 리뷰 문화를 적극 실천하고 있습니다.<br />
새로운 기술과 도구에 열린 자세로 변화에 유연하게 대응하며, 주어진 환경에서 항상 최선의 기술적 선택을 하려 노력하는 개발자입니다.
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
                <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  {project.title}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                      <ExternalLink size={18} />
                    </a>
                  )}
                </CardTitle>
                <CardDescription className="hidden sm:block mt-1 text-gray-600 dark:text-gray-400">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow p-0 mt-4 sm:mt-0">
                <div className="flex flex-wrap gap-2 mb-3">
                  {Array.isArray(project.skills) ? (
                    project.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">{skill}</Badge>
                    ))
                  ) : (
                    <>
                      {project.skills.frontend && (
                        <div className="flex flex-wrap items-center gap-2 w-full mb-1">
                          <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 min-w-[70px]">Frontend</span>
                          {project.skills.frontend.map((skill, i) => (
                            <Badge key={`fe-${i}`} variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">{skill}</Badge>
                          ))}
                        </div>
                      )}
                      {project.skills.backend && (
                        <div className="flex flex-wrap items-center gap-2 w-full mb-1">
                          <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 min-w-[70px]">Backend</span>
                          {project.skills.backend.map((skill, i) => (
                            <Badge key={`be-${i}`} variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">{skill}</Badge>
                          ))}
                        </div>
                      )}
                      {project.skills.common && (
                        <div className="flex flex-wrap items-center gap-2 w-full mb-1">
                          <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 min-w-[70px]">Common</span>
                          {project.skills.common.map((skill, i) => (
                            <Badge key={`cm-${i}`} variant="secondary">{skill}</Badge>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
                <p className="sm:hidden text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
                {project.images &&
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    {project.images.map((image, imgIdx) => (
                      <img
                        key={imgIdx}
                        src={image}
                        className="w-full h-48 rounded-lg object-cover border border-border cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => setSelectedImage(image)}
                      />
                    ))}
                  </div>
                }
                {project.imagePlaceholder && !project.images &&
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    <div className="h-48 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center bg-gray-50 dark:bg-gray-800/50">
                      <span className="text-sm text-gray-400 dark:text-gray-500">이미지 준비중</span>
                    </div>
                    <div className="h-48 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center bg-gray-50 dark:bg-gray-800/50">
                      <span className="text-sm text-gray-400 dark:text-gray-500">이미지 준비중</span>
                    </div>
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

      {/* --- 이미지 확대 모달 --- */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            className="max-w-[90vw] max-h-[90vh] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default Home;
