import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Megazone = () => {
  return (
    <div className="py-10">
      {/* --- 프로젝트 섹션 카드 --- */}
      <Card className="overflow-hidden border-border bg-card/50">
        <CardHeader>
          {/* h1 대신 span을 사용하여 의미에 맞게 수정 */}
          <CardTitle className="text-2xl font-bold flex items-center flex-wrap">
            <span className="text-muted-foreground mr-2">프로젝트:</span>
            <span className="text-primary">개인 포트폴리오 웹사이트</span>
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-10 p-6">
          {/* 1. 이미지 영역 */}
          <div>
            <img
              src="https://placehold.co/1200x600/171717/facc15?text=Project+Screenshot"
              alt="프로젝트 스크린샷"
              className="w-full h-auto rounded-lg object-cover border border-border"
            />
          </div>

          {/* 2. 프로젝트 설명 */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold border-l-4 border-primary pl-3">
              프로젝트 설명
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              React, TypeScript, Vite, shadcn/ui를 사용하여 제작한 개인 포트폴리오 웹사이트입니다.
              반응형 디자인을 적용하여 다양한 디바이스에서 최적의 경험을 제공하며, 다크 테마를 기본으로 하여 모던한 느낌을 주고자 했습니다.
            </p>
          </div>

          {/* 3. 기술 스택 */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold border-l-4 border-primary pl-3">
              기술 스택
            </h3>
            <div className="flex flex-wrap gap-2 pt-2">
              <Badge variant="default">React</Badge>
              <Badge variant="default">TypeScript</Badge>
              <Badge variant="default">Vite</Badge>
              <Badge variant="secondary">Tailwind CSS</Badge>
              <Badge variant="secondary">shadcn/ui</Badge>
            </div>
          </div>

          {/* 4. 맡은 일 */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold border-l-4 border-primary pl-3">
              맡은 일
            </h3>
            <ul className="list-disc list-inside space-y-2 pt-2 text-muted-foreground">
              <li>Vite와 TypeScript를 사용한 프로젝트 초기 설정 및 구조 설계</li>
              <li>shadcn/ui와 Tailwind CSS를 활용한 다크 테마 UI/UX 디자인 및 구현</li>
              <li>React Router DOM을 이용한 페이지 라우팅 및 레이아웃 관리</li>
              <li>재사용 가능한 컴포넌트(Header, Card 등) 설계 및 개발</li>
              <li>반응형 웹 디자인 적용하여 모바일 및 데스크탑 환경 최적화</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Megazone;
