import assert from 'node:assert/strict';
import { test } from 'node:test';
import { ownsCommit } from '../../resources/js/lib/owns-commit.ts';

const auth = { user: { id: 'me' }, organizations: [{ id: 'laravel-denmark' }] };

void test('owns the commits it wrote and those of its organizations, which take no stars or pastéis from it', () => {
    assert.equal(ownsCommit(auth, { author: { id: 'me' } }), true);
    assert.equal(ownsCommit(auth, { author: { id: 'laravel-denmark' } }), true);
});

void test('does not own anyone else, or anything while signed out', () => {
    assert.equal(ownsCommit(auth, { author: { id: 'di' } }), false);
    assert.equal(
        ownsCommit(
            { user: null, organizations: [] },
            { author: { id: 'me' } },
        ),
        false,
    );
});
