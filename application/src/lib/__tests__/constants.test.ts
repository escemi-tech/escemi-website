import { beforeEach, describe, expect, it, vi } from 'vitest';
import type { ResumeLocale, ResumeProject } from '../../data/resumes/index';

const mockProjects = [
    {
        name: 'Alpha',
        description: 'Alpha project',
        featured: true,
        highlights: ['deliver something great'],
        keywords: ['Node.js'],
        roles: ['Lead Engineer'],
        entity: 'Acme',
        type: 'consulting',
        startDate: '2024-01',
        endDate: '2024-04',
    },
    {
        name: 'Beta',
        description: 'Beta project',
        featured: true,
        highlights: ['scaled delivery'],
        keywords: ['DevOps'],
        roles: ['Coach'],
        entity: 'Orbit',
        type: 'consulting',
        startDate: '2024-06',
    },
    {
        name: 'Gamma',
        description: 'Gamma project',
        featured: true,
        highlights: ['modernized architecture'],
        keywords: ['Clean Architecture'],
        roles: ['Architect'],
        entity: 'Nova',
        type: 'consulting',
        startDate: '2024-05',
        endDate: '2024-05',
    },
    {
        name: 'Delta',
        description: 'Delta project',
        featured: true,
        highlights: ['stabilized platform'],
        keywords: ['SRE'],
        roles: ['Advisor'],
        entity: 'Helios',
        type: 'consulting',
        endDate: '2023-12',
    },
];

const mockedGetFeaturedProjects = vi.fn((_locale?: ResumeLocale, limit?: number): ResumeProject[] => {
    const subset = typeof limit === 'number' ? mockProjects.slice(0, limit) : mockProjects;
    return subset as unknown as ResumeProject[];
});

vi.mock('../../data/resumes/index', async () => {
    const actual = await vi.importActual<typeof import('../../data/resumes/index')>('../../data/resumes/index');
    return {
        ...actual,
        getFeaturedProjects: mockedGetFeaturedProjects,
    };
});

// Import after mocking so the module under test picks up the mocked implementation
const { getFeaturedProjectCards } = await import('../constants');

describe('getFeaturedProjectCards', () => {
    beforeEach(() => {
        mockedGetFeaturedProjects.mockClear();
    });

    it('formats timeframes for the available resume project shapes', () => {
        const cards = getFeaturedProjectCards('fr');
        expect(cards).toHaveLength(mockProjects.length);

        expect(cards.map((card) => ({ name: card.name, timeframe: card.timeframe }))).toEqual([
            { name: 'Alpha', timeframe: 'Jan 2024 — Apr 2024' },
            { name: 'Beta', timeframe: 'Jun 2024 — Present' },
            { name: 'Gamma', timeframe: 'May 2024' },
            { name: 'Delta', timeframe: 'Dec 2023' },
        ]);
    });

    it('honors locale + limit arguments when requesting resume data', () => {
        const cards = getFeaturedProjectCards('en', 2);
        expect(mockedGetFeaturedProjects).toHaveBeenCalledWith('en', 2);
        expect(cards).toHaveLength(2);
        expect(cards[0]).toMatchObject({ name: 'Alpha' });
        expect(cards[1]).toMatchObject({ name: 'Beta' });
    });
});
