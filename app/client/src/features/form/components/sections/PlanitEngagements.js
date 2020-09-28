/**
 * @flow
 */

import React from 'react'
import { connect } from 'react-redux'
import Section from './Section'
import { Button, Divider } from '../../../../common/components'
import LabeledInput from '../fragments/LabeledInput'
import { Job } from '..'
import {
  addJob,
  removeJob,
  addJobHighlight,
  removeJobHighlight
} from '../../actions'
import type { FormValues } from '../../types'
import type { State } from '../../../../app/types'

type Props = {
  PlanitEngagements: $PropertyType<FormValues, 'PlanitEngagements'>,
  jobCount: number,
  jobHighlights: Array<number>,
  addJob: () => void,
  removeJob: () => void,
  addJobHighlight: (index: number) => void,
  removeJobHighlight: (index: number) => void
}

function PlanitEngagements({
  PlanitEngagements,
  addJob,
  removeJob,
  addJobHighlight,
  removeJobHighlight
}: Props) {
  return (
    <Section heading="Planit Engagements">
      <LabeledInput
        name="headings.PlanitEngagements"
        label="Section Heading"
        placeholder="Work Experience"
      />
      <Divider />
      {PlanitEngagements.map((job, i) => (
        <Job
          key={i}
          index={i}
          highlights={job.highlights}
          addHighlight={addJobHighlight}
          removeHighlight={removeJobHighlight}
        />
      ))}
      <Button onClick={addJob} type="button">
        Add Job
      </Button>
      <Button onClick={removeJob} disabled={PlanitEngagements.length === 1} type="button">
        Remove Job
      </Button>
    </Section>
  )
}

function mapState(state: State) {
  return {
    PlanitEngagements: state.form.resume.values.PlanitEngagements
  }
}

const mapActions = {
  addJob,
  removeJob,
  addJobHighlight,
  removeJobHighlight
}

export default connect(mapState, mapActions)(PlanitEngagements)
