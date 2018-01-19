import fetch from 'isomorphic-fetch'
import gitlabUrl from '../gitlab-url.txt'

export function triggerDeploy ({ token, username, projectId, jobName }) {
    const gitlabApi = `${gitlabUrl}/${projectId}/`
    const headers = {
        'PRIVATE-TOKEN': token
    }

    return fetch(`${gitlabApi}jobs`, {
        method: 'get',
        headers
    })
        .then(response => response.json())
        .then(response => {
            if (!response.length) {
                throw new Error(`Unexpected response from gitlab: ${JSON.stringify(response)}`)
            }
            const jobs = response
            const myJobs = jobs.filter(job => job.user.username === username)
            const myJobsMatchingName = myJobs.filter(job => job.name === jobName)
            if (!myJobsMatchingName.length) {
                throw new Error('No matching jobs! ' +
                    `jobs=${jobs.length} myJobs=${myJobs.length} myJobsMatchingName=${myJobsMatchingName.length}`)
            }
            const myLatestMatchingJob = myJobsMatchingName[0]
            if (myLatestMatchingJob !== 'success') {
                const playUrl = `${gitlabApi}jobs/${myLatestMatchingJob.id}/play`

                return fetch(playUrl, {
                    method: 'post',
                    headers
                })
            }
            return 'latest is a success'
        })
}