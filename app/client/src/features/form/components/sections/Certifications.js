/**
 * @flow
 */

import React from 'react'
import { connect } from 'react-redux'
import Section from './Section'
import { Button, Divider } from '../../../../common/components'
import LabeledInput from '../fragments/LabeledInput'
import { Certification } from '..'
import { addAward, removeAward } from '../../actions'
import type { FormValues } from '../../types'
import type { State } from '../../../../app/types'

type Props = {
  certifications: $PropertyType<FormValues, 'certifications'>,
  addAward: () => void,
  removeAward: () => void
}

function Certifications({ certifications, addAward, removeAward }: Props) {
  return (
    <Section heading="Certifications / Awards">
      <LabeledInput
        name="headings.certifications"
        label="Section Heading"
        placeholder="Certifications"
      />
      <Divider />
      {certifications.map((certification, i) => <Certification key={i} index={i} />)}
      <div className="section-buttons">
        <Button onClick={addAward} type="button">
          Add 
        </Button>
        <Button
          onClick={removeAward}
          disabled={certifications.length === 1}
          type="button"
        >
          Remove 
        </Button>
      </div>
    </Section>
  )
}

function mapState(state: State) {
  return {
    certifications: state.form.resume.values.certifications
  }
}

const mapActions = {
  addAward,
  removeAward
}

export default connect(mapState, mapActions)(Certifications)
