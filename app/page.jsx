import Link from 'next/link';
import { Card } from 'components/card';
import { ContextAlert } from 'components/context-alert';
import { Markdown } from 'components/markdown';
import { RandomQuote } from 'components/random-quote';
import { getNetlifyContext } from 'utils';

            <section>
                <ContextAlert className="mb-6" />
                <h1 className="mb-4">AASE-EMIS</h1>
                <p className="mb-6 text-lg">Get Your Authentic and Accurate Data from AASEDEO EMIS.</p>
                <Link href="https://sites.google.com/view/aasedeo-user-login/staff-login" className="btn btn-lg sm:min-w-64">
                    Staff Login
