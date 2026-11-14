import { usePage } from '@inertiajs/react';
import { ownsCommit } from '@/lib/owns-commit';

/**
 * Whether the signed-in user owns a commit: one from them, or from an organization they can post as.
 */
export function useOwnsCommit(): (commit: {
    author: { id: string };
}) => boolean {
    const { auth } = usePage().props;

    return (commit) => ownsCommit(auth, commit);
}
