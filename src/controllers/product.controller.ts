import { Request, Response } from 'express'
import * as PacienteModel from '../models/paciente.model'

export const index = (_req: Request, res: Response): void => {
  const pacientes = PacienteModel.getAll()
  res.render('pacientes/index', { pacientes })
}

export const show = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id as string)
  const paciente = PacienteModel.getById(id)
  if (!paciente) {
    res.status(404).render('404', { message: 'Paciente no encontrado' })
    return
  }
  res.render('pacientes/show', { paciente })
}

export const createForm = (_req: Request, res: Response): void => {
  res.render('pacientes/create')
}

export const createAction = (req: Request, res: Response): void => {
  const { firstName, lastName, email, membershipType } = req.body
  const newPaciente = PacienteModel.create({ firstName, lastName, email, membershipType })
  res.redirect(`/pacientes/${newPaciente.id}`)
}

export const editForm = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id as string)
  const paciente = PacienteModel.getById(id)
  if (!paciente) {
    res.status(404).render('404', { message: 'Paciente no encontrado' })
    return
  }
  res.render('pacientes/edit', { paciente })
}

export const editAction = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id as string)
  const { firstName, lastName, email, membershipType } = req.body
  const updated = PacienteModel.update(id, { firstName, lastName, email, membershipType })
  if (!updated) {
    res.status(404).render('404', { message: 'Paciente no encontrado' })
    return
  }
  res.redirect(`/pacientes/${id}`)
}

export const deleteAction = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id as string)
  const deleted = PacienteModel.remove(id)
  if (!deleted) {
    res.status(404).render('404', { message: 'Paciente no encontrado' })
    return
  }
  res.redirect('/pacientes')
}
