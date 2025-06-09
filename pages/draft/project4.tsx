import React from 'react';
import Container from 'components/common/Container';
import Image from 'next/image';
import Link from 'next/link';

const Project4 = () => {
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
                        Real-time Collaboration Platform
                    </h1>

                    <div className="relative aspect-video mb-8 overflow-hidden">
                        <Image
                            src="/draft_4.png"
                            alt="Draft Project 4"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="prose max-w-none">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">프로젝트 개요</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            실시간 협업을 위한 웹 플랫폼 프로젝트입니다.
                            Socket.IO를 활용한 실시간 통신과 MongoDB 기반의 데이터 동기화를 구현했습니다.
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
                            <li>첨단 기술 융합</li>
                            <li>사용자 중심 설계</li>
                            <li>지속가능한 솔루션</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mb-3">사용 기술</h3>
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="px-3 py-1 bg-slate-100 text-slate-800 rounded-full text-sm">Vue.js</span>
                            <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm">Node.js</span>
                            <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">MongoDB</span>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Project4; 