@extends('layouts.app')

@section('content')

    <div class="container" style="max-width: 1400px; margin: 0 auto; padding: 40px 20px;">

        <div class="mb-4">
            <h2 class="mb-1">Управление пользователями</h2>
            <p class="text-muted">Список пользователей системы</p>
        </div>

        <div class="card shadow-sm">
            <div class="card-body p-0">
                <div class="table-responsive">
                    <table class="table mb-0" style="text-align: center">
                        <thead class="table-light">
                        <tr>
                            <th style="width: 80px;">#</th>
                            <th>Имя</th>
                            <th>Аватар</th>
                            <th>Добавлено</th>
                        </tr>
                        </thead>
                        <tbody>
                        @forelse($users as $user)
                            <tr>
                                <td>{{ $user->id }}</td>
                                <td>{{ $user->nickname }}</td>
                                <td>
                                    <img
                                        src="{{ asset('storage/' . $user->avatar) }}"
                                        alt="Avatar"
                                        width="50"
                                        height="50"
                                        style="object-fit: cover; border-radius: 50%;"
                                    >
                                </td>

                                <td>{{ $user->created_at }}</td>
                            </tr>
                        @empty
                            <tr>
                                <td colspan="4" class="text-center py-5 text-muted">
                                    <i class="bx bx-user-x bx-lg d-block mb-2"></i>
                                    Пользователи пока отсутствуют в системе.
                                </td>
                            </tr>
                        @endforelse
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="card-footer bg-white">
                @if($users->hasPages())
                    <div class="d-flex justify-content-end mt-4">
                        {{ $users->appends(request()->query())->links('components.pagination.pagination') }}
                    </div>
                @endif
            </div>

        </div>

    </div>

@endsection
