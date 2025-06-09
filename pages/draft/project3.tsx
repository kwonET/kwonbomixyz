import React from 'react';
import Container from 'components/common/Container';
import Image from 'next/image';
import Link from 'next/link';

const Project3 = () => {
    return (
        <Container checkedMenu='Draft'>
            <div className="p-20 bg-white min-h-screen mt-6 pt-2 md:pt-[200px]">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-8">
                        <Link href="/draft" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
                            ← Draft로 돌아가기
                        </Link>
                    </div>

                    <h1 className="text-4xl font-bold text-gray-800 mb-6">
                        AI-Powered Data Visualization
                    </h1>

                    <div className="relative aspect-video mb-8 rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src="/draft_3.png"
                            alt="Draft Project 3"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="prose max-w-none">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">프로젝트 개요</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            AI 기반 데이터 분석과 실시간 시각화를 결합한 인터랙티브 대시보드 프로젝트입니다.
                            머신러닝 모델을 통해 데이터 패턴을 분석하고 D3.js로 동적 시각화를 구현했습니다.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Link</h2>
                        <div className="flex flex-wrap gap-2 mb-6">
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm hover:bg-green-200 transition-colors duration-300"
                            >
                                Live Demo
                            </a>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-gray-200 transition-colors duration-300"
                            >
                                Source Code
                            </a>
                        </div>

                        <h3 className="text-xl font-semibold text-gray-800 mb-3">주요 특징</h3>
                        <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                            <li>AI 기반 컨텐츠 생성</li>
                            <li>실시간 데이터 시각화</li>
                            <li>interactive 사용자 경험</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mb-3">사용 기술</h3>
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">TensorFlow</span>
                            <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm">D3.js</span>
                            <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">Socket.IO</span>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Project3; 