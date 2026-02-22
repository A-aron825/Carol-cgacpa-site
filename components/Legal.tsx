
import React from 'react';

interface LegalProps {
  lang: 'en' | 'zh';
}

const Legal: React.FC<LegalProps> = ({ lang }) => {
  const isEn = lang === 'en';

  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="space-y-16">
        <div id="privacy-policy">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-wider">
            {isEn ? 'Privacy Policy' : '隐私政策'}
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            {isEn 
              ? "Carol Liu, CPA, CGA Professional Corp. is committed to protecting your privacy. We collect only the information necessary to provide our accounting and tax services. Your data is handled with the highest level of confidentiality in accordance with Canadian professional standards."
              : "Carol Liu, CPA, CGA 专业会计师事务所致力于保护您的隐私。我们仅收集提供会计和税务服务所必需的信息。您的数据将根据加拿大专业标准以最高级别的保密性进行处理。"}
          </p>
        </div>

        <div id="compliance">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-wider">
            {isEn ? 'Professional Compliance' : '执业合规'}
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            {isEn 
              ? "As a member of the Chartered Professional Accountants of British Columbia, Carol Liu adheres to the Code of Professional Conduct. All services are performed in compliance with the Income Tax Act and GAAP standards."
              : "作为不列颠哥伦比亚省特许专业会计师协会成员，Carol Liu 严格遵守专业行为守则。所有服务均符合所得税法和 GAAP 标准。"}
          </p>
        </div>

        <div id="terms">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-wider">
            {isEn ? 'Terms of Service' : '服务条款'}
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            {isEn 
              ? "Engagement for services is finalized only upon the signing of an engagement letter. Use of this website does not constitute an accountant-client relationship."
              : "只有在签署业务约定书后，服务约定才算最终确定。使用本网站不构成会计师与客户的关系。"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Legal;
