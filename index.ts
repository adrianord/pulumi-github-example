import { Repository, RepositoryArgs } from "@pulumi/github";

export type RepositoryOpts = { name: string } & RepositoryArgs;

export function createRepository(overrides: RepositoryOpts) {
    return new Repository(overrides.name, {
        visibility: "private",
        hasProjects: false,
        hasWiki: false,
        hasIssues: true,
        hasDownloads: false,
        ...overrides
    });
}


const repositories = [
    createRepository({name: "test-repository", description: "A test repository for pulumi-github-example"}),
];

export const sshCloneUrls = repositories.map(x => ({
    name: x.name,
    sshCloneUrl: x.sshCloneUrl
}));
