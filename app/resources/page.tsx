// app/resources/page.tsx
export const metadata = {
    title: 'Voter Resources',
    description: 'Information and resources for voter registration and participation'
};

export default function ResourcesPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6 prose prose">Voter Resources</h1>
            <div className="space-y-4">
                <section>
                        <h3 id="your-complete-guide-to-voting">Your Complete Guide to Voting</h3>
                        <p>Welcome to our voter resources page! Here, you’ll find everything you need to ensure your voice is heard in the upcoming elections. From registration deadlines to polling locations, we’ve got you covered with the tools and information you need to make voting easy and stress-free.</p>
                        <hr />
                            <h4 id="-step-1-register-to-vote-"><strong>Step 1: Register to Vote</strong></h4>
                            <p>The first step to participating in any election is making sure you’re registered to vote. Each state has different voter registration deadlines and requirements, so it’s essential to check your status or register well in advance.  </p>
                            <ul>
                                <li><p><strong>How to Register</strong>:  </p>
                                    <ul>
                                        <li>Visit your state’s election office website or use online tools like <a href="https://www.vote.org/register-to-vote/">vote.org</a> to complete your registration.  </li>
                                        <li>In some states, you can register in person at your local election office or when you renew your driver’s license.</li>
                                    </ul>
                                </li>
                                <li><p><strong>Check Your Registration</strong>:<br /> Already registered? Verify your voter registration status to ensure your information is up to date, especially if you’ve recently moved or changed your name.</p>
                                </li>
                            </ul>
                            <hr />
                                <h4 id="-step-2-know-your-deadlines-"><strong>Step 2: Know Your Deadlines</strong></h4>
                                <p>Every state has its own timeline for voter registration, early voting, and mail-in ballot submissions. Missing a deadline could mean losing your opportunity to vote, so mark your calendar today!  </p>
                                <ul>
                                    <li><strong>Key Deadlines to Watch For</strong>:  <ul>
                                        <li>Voter registration deadlines (often 15-30 days before Election Day).  </li>
                                        <li>Early voting start dates (varies by state).  </li>
                                        <li>Mail-in ballot request and submission deadlines.</li>
                                    </ul>
                                    </li>
                                </ul>
                                <hr />
                                    <h4 id="-step-3-find-your-polling-location-"><strong>Step 3: Find Your Polling Location</strong></h4>
                                    <p>Voting in person? Use your state’s polling location tool to find out where to cast your ballot. Polling places are usually assigned based on your home address, so double-check this information ahead of time.  </p>
                                    <ul>
                                        <li><strong>What to Bring</strong>:<br /> Some states require identification to vote. Make sure you have the appropriate ID or documents needed to verify your identity at the polls.</li>
                                    </ul>
                                    <hr />
                                        <h4 id="-step-4-understand-your-voting-options-"><strong>Step 4: Understand Your Voting Options</strong></h4>
                                        <p>Voting should be accessible for everyone. Here are the primary methods available:  </p>
                                        <ol>
                                            <li><p><strong>In-Person Voting</strong>:  </p>
                                                <ul>
                                                    <li>Vote on Election Day at your assigned polling place or take advantage of early voting options if your state offers them.  </li>
                                                </ul>
                                            </li>
                                            <li><p><strong>Mail-In Voting</strong>:  </p>
                                                <ul>
                                                    <li>Request a mail-in ballot if you’re unable to vote in person. Make sure to submit it before your state’s deadline!  </li>
                                                </ul>
                                            </li>
                                            <li><p><strong>Same-Day Registration and Voting</strong>:  </p>
                                                <ul>
                                                    <li>Some states allow you to register and vote on Election Day. This is a great option if you miss earlier deadlines.  </li>
                                                </ul>
                                            </li>
                                        </ol>

                                            <h4 id="-step-5-stay-informed-"><strong>Step 5: Stay Informed</strong></h4>
                                            <p>Understanding the issues and candidates on your ballot is just as important as showing up to vote. Research the candidates, their platforms, and any ballot measures before heading to the polls.  </p>
                                            <ul>
                                                <li>Use trusted resources like <a href="https://www.ballotready.org/">Ballot Ready</a> to preview your ballot and make informed choices.  </li>
                                            </ul>
                                            <hr />
                                                <h4 id="-frequently-asked-questions-"><strong>Frequently Asked Questions</strong></h4>
                                                <ol>
                                                    <li><p><strong>What if I miss the voter registration deadline?</strong>  </p>
                                                        <ul>
                                                            <li>In states with same-day registration, you can still register and vote on Election Day. Otherwise, you won’t be eligible to vote in that election.  </li>
                                                        </ul>
                                                    </li>
                                                    <li><p><strong>Can I vote if I’ve recently moved?</strong>  </p>
                                                        <ul>
                                                            <li>Yes! You’ll need to update your voter registration to reflect your new address. Deadlines vary by state.  </li>
                                                        </ul>
                                                    </li>
                                                    <li><p><strong>What if I’m out of town on Election Day?</strong>  </p>
                                                        <ul>
                                                            <li>Request a mail-in ballot or vote early if your state allows.  </li>
                                                        </ul>
                                                    </li>
                                                    <li><p><strong>What happens if I go to the wrong polling place?</strong>  </p>
                                                        <ul>
                                                            <li>In some states, you may be able to cast a provisional ballot, but it’s best to confirm your assigned polling location beforehand.  </li>
                                                        </ul>
                                                    </li>
                                                </ol>
                                                <hr />
                                                    <h4 id="-make-a-plan-to-vote-"><strong>Make a Plan to Vote</strong></h4>
                                                    <p>Voting is one of the most powerful ways to make your voice heard. Whether you’re voting in person, by mail, or early, planning ahead ensures you’ll be ready when it’s time to cast your ballot.  </p>
                                                    <p><strong>Remember</strong>: Every vote matters, and participation shapes the future of our communities and country. Don’t wait—take action today!  </p>

                                                        <p>This content emphasizes actionable steps, encourages participation, and provides clear, concise guidance for voters. Let me know if you’d like further refinements or additional sections!</p>

                </section>
            </div>
        </div>
    )
}